import { postJson, toGhlContact } from "./ghl";

async function notifyEmail(kind: "apply" | "align", payload: Record<string, unknown>) {
  const to = process.env.FORM_NOTIFY_EMAIL;
  if (!to) return { skipped: true };
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(to)}`;
  const subject =
    kind === "apply" ? "DCRBN Speed to Scale application" : "DCRBN strategic alignment";
  await postJson(endpoint, {
    _subject: subject,
    _template: "box",
    kind,
    ...payload,
  });
  return { emailed: to };
}

export async function forwardSubmission(
  kind: "apply" | "align",
  payload: Record<string, unknown>
) {
  const webhook =
    kind === "apply" ? process.env.APPLY_WEBHOOK_URL : process.env.ALIGN_WEBHOOK_URL;
  const ghl = toGhlContact(kind, payload);
  const results: Record<string, unknown> = { ghlLocationId: ghl.locationId };

  if (webhook) {
    await postJson(webhook, { kind, ...ghl, payload, submittedAt: new Date().toISOString() });
    results.webhook = true;
  } else {
    results.webhook = false;
  }

  try {
    results.email = await notifyEmail(kind, payload);
  } catch (err) {
    results.emailError = err instanceof Error ? err.message : "email failed";
  }

  console.info(`[dcrbn] ${kind} submission`, {
    email: process.env.FORM_NOTIFY_EMAIL || null,
    webhook: Boolean(webhook),
    keys: Object.keys(payload),
  });

  return { ok: true, delivered: Boolean(webhook), results };
}
