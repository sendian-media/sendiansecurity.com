import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const FIELD_LIMITS = {
  firstname: 400,
  lastname: 400,
  email: 400,
  phone: 400,
  message: 2000,
} as const;

type ContactField = keyof typeof FIELD_LIMITS;
type ContactPayload = Record<ContactField, string> & { website?: unknown };

const environment = import.meta.env;
const envValue = (name: string): string | undefined => {
  const value = process.env[name] ?? environment[name];
  return typeof value === 'string' ? value : undefined;
};

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

const readField = (payload: Record<string, unknown>, name: ContactField) => {
  const value = payload[name];
  if (typeof value !== 'string') return null;

  const normalized = value.trim();
  return normalized.length <= FIELD_LIMITS[name] ? normalized : null;
};

const hasAllowedOrigin = (request: Request) => {
  const origin = request.headers.get('origin');
  if (!origin) return false;

  const configuredOrigins = envValue('CONTACT_EMAIL_ALLOWED_ORIGINS') ?? envValue('SITE_URL') ?? '';
  const allowedOrigins = configuredOrigins
    .split(',')
    .map((value) => value.trim().replace(/\/$/, ''))
    .filter(Boolean);

  return allowedOrigins.includes(origin);
};

export const POST: APIRoute = async ({ request }) => {
  if (!hasAllowedOrigin(request)) return json({ error: 'Unauthorized origin.' }, 403);
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return json({ error: 'Expected JSON.' }, 415);
  }

  let payload: ContactPayload;
  try {
    payload = await request.json() as ContactPayload;
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  if (payload.website) return json({ ok: true });

  const firstname = readField(payload, 'firstname');
  const lastname = readField(payload, 'lastname');
  const email = readField(payload, 'email');
  const phone = readField(payload, 'phone');
  const message = readField(payload, 'message');

  if (!firstname || !lastname || !email || phone === null || message === null) {
    return json({ error: 'Invalid contact details.' }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Invalid email address.' }, 400);
  }

  const apiKey = envValue('RESEND_API_KEY');
  const internalRecipient = envValue('RESEND_INTERNAL_RECIPIENT');
  const internalTemplate = envValue('RESEND_INTERNAL_TEMPLATE');
  const acknowledgmentTemplate = envValue('RESEND_ACK_TEMPLATE');

  if (!apiKey || !internalRecipient || !internalTemplate || !acknowledgmentTemplate) {
    console.error('Contact email service is not configured.');
    return json({ error: 'Email service is unavailable.' }, 503);
  }

  const variables = {
    CONTACT_FIRST_NAME: firstname,
    CONTACT_LAST_NAME: lastname,
    CONTACT_EMAIL: email,
    CONTACT_PHONE: phone,
    CONTACT_MESSAGE: message,
  };
  const resend = new Resend(apiKey);

  try {
    const [internalResult, acknowledgmentResult] = await Promise.all([
      resend.emails.send({
        to: [internalRecipient],
        subject: `New website inquiry from ${firstname} ${lastname}`,
        replyTo: email,
        template: { id: internalTemplate, variables },
      }),
      resend.emails.send({
        to: [email],
        subject: 'We received your inquiry',
        replyTo: internalRecipient,
        template: { id: acknowledgmentTemplate, variables },
      }),
    ]);

    if (internalResult.error || acknowledgmentResult.error) {
      console.error('Contact email delivery request failed.');
      return json({ error: 'Email delivery request failed.' }, 502);
    }
  } catch {
    console.error('Contact email delivery request failed.');
    return json({ error: 'Email delivery request failed.' }, 502);
  }

  return json({ ok: true });
};
