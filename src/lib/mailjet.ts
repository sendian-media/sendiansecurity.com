export type MailjetRecipient = { Email: string };

type NotificationField = {
  label: string;
  value: string;
};

type MailjetNotification = {
  apiKey?: string;
  apiSecret?: string;
  fromEmail?: string;
  fromName?: string;
  notificationTo?: string;
  notificationBcc?: string;
  subject: string;
  heading: string;
  fields: NotificationField[];
};

export const escapeHtml = (value: string) => {
  const entities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  return value.replace(/[&<>"']/g, (character) => entities[character] ?? character);
};

export const parseRecipients = (value?: string): MailjetRecipient[] => (value ?? '')
  .split(',')
  .map((email) => email.trim())
  .filter((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
  .map((Email) => ({ Email }));

export async function sendMailjetNotification(notification: MailjetNotification): Promise<{ ok: boolean; status?: number }> {
  const { apiKey, apiSecret, fromEmail, fromName, notificationTo, notificationBcc, subject, heading, fields } = notification;
  const toRecipients = parseRecipients(notificationTo);
  const bccRecipients = parseRecipients(notificationBcc);

  if (!apiKey || !apiSecret || !fromEmail || !fromName || !toRecipients.length) return { ok: false };

  const textPart = `${heading}\n\n${fields.map(({ label, value }) => `${label}: ${value}`).join('\n')}`;
  const htmlPart = `<h1>${escapeHtml(heading)}</h1><dl>${fields.map(({ label, value }) => `<dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd>`).join('')}</dl>`;

  try {
    const response = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Messages: [{
          From: { Email: fromEmail, Name: fromName },
          To: toRecipients,
          ...(bccRecipients.length ? { Bcc: bccRecipients } : {}),
          Subject: subject,
          TextPart: textPart,
          HTMLPart: htmlPart,
        }],
      }),
      signal: AbortSignal.timeout(10_000),
    });
    const result = await response.json().catch(() => null) as { Messages?: Array<{ Status?: string }> } | null;
    const delivered = result?.Messages?.every(({ Status }) => Status?.toLowerCase() === 'success') ?? false;

    return { ok: response.ok && delivered, status: response.status };
  } catch {
    return { ok: false };
  }
}
