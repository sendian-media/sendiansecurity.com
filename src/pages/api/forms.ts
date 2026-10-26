import type { APIRoute } from 'astro';
import { sendMailjetNotification } from '@/lib/mailjet';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const forms = {
  contact: {
    hubSpotFormId: '0ec48611-6e4a-4d9e-bf9a-7f51f9c7d061',
    heading: 'New website contact enquiry',
    fields: [
      { name: 'firstname', label: 'First name', required: true, maxLength: 400 },
      { name: 'lastname', label: 'Last name', required: true, maxLength: 400 },
      { name: 'email', label: 'Email', required: true, maxLength: 400 },
      { name: 'phone', label: 'Phone', required: false, maxLength: 400 },
      { name: 'message', label: 'Message', required: false, maxLength: 2_000 },
    ],
    hubSpotFields: [{ name: 'contact_from', value: 'Sendian_Security' }],
  },
  vendor: {
    hubSpotFormId: '4b70dfe3-bd6b-461b-bdc9-344b19e50481',
    heading: 'New vendor registration',
    fields: [
      { name: 'firstname', label: 'Full name', required: true, maxLength: 400 },
      { name: 'email', label: 'Email', required: true, maxLength: 400 },
      { name: 'phone', label: 'Phone', required: true, maxLength: 400 },
      { name: 'company', label: 'Company', required: true, maxLength: 400 },
      { name: 'industry', label: 'Company type', required: true, maxLength: 400 },
      { name: 'client_type', label: 'Products/services category', required: true, maxLength: 400 },
      { name: 'message', label: 'Company overview', required: true, maxLength: 2_000 },
    ],
    hubSpotFields: [],
  },
} as const;

type FormName = keyof typeof forms;

function getFormValue(formData: FormData, name: string, required: boolean, maxLength: number): string | null {
  const value = formData.get(name);
  if (typeof value !== 'string') return null;

  const trimmed = value.trim();
  if ((required && !trimmed) || trimmed.length > maxLength) return null;

  return trimmed;
}

export const POST: APIRoute = async ({ request }) => {
  const requestOrigin = new URL(request.url).origin;
  const origin = request.headers.get('origin');
  if (origin && origin !== requestOrigin) return Response.json({ error: 'Invalid request origin.' }, { status: 403 });

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ error: 'Invalid form submission.' }, { status: 400 });
  }

  if (formData.get('_gotcha')) return Response.json({ error: 'Invalid form submission.' }, { status: 400 });

  const formName = formData.get('form');
  if (formName !== 'contact' && formName !== 'vendor') return Response.json({ error: 'Unknown form.' }, { status: 400 });

  const form = forms[formName as FormName];
  const values: Record<string, string> = {};
  for (const field of form.fields) {
    const value = getFormValue(formData, field.name, field.required, field.maxLength);
    if (value === null || (field.name === 'email' && !emailPattern.test(value))) {
      return Response.json({ error: 'Please provide valid form details.' }, { status: 400 });
    }
    values[field.name] = value;
  }

  const hubSpotResponse = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/148999608/${form.hubSpotFormId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: [
        ...form.fields.map(({ name }) => ({ name, value: values[name] })),
        ...form.hubSpotFields,
      ],
      context: {
        pageUri: request.headers.get('referer') ?? request.url,
        pageName: formName,
      },
    }),
    signal: AbortSignal.timeout(10_000),
  }).catch(() => null);

  if (!hubSpotResponse?.ok) {
    console.error('HubSpot form submission failed.', { form: formName, status: hubSpotResponse?.status });
    return Response.json({ error: 'Unable to submit your form. Please try again.' }, { status: 502 });
  }

  const notification = await sendMailjetNotification({
    apiKey: import.meta.env.MAILJET_API_KEY,
    apiSecret: import.meta.env.MAILJET_API_SECRET,
    fromEmail: import.meta.env.MAILJET_FROM_EMAIL,
    fromName: import.meta.env.MAILJET_FROM_NAME,
    notificationTo: import.meta.env.MAILJET_NOTIFICATION_TO,
    notificationBcc: import.meta.env.MAILJET_NOTIFICATION_BCC,
    subject: form.heading,
    heading: form.heading,
    fields: form.fields.map(({ name, label }) => ({ label, value: values[name] })),
  });

  if (!notification.ok) console.error('Mailjet notification failed.', { form: formName, status: notification.status });

  return Response.json({ success: true });
};
