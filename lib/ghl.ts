const LOCATION_ID = process.env.GHL_LOCATION_ID || "69df8c1ec7fee340d1abbfa6";
const APPLY_FORM_ID = process.env.GHL_APPLY_FORM_ID || "3AHlX3sqiUl11P4Xvk0s";

function splitName(full: string) {
  const parts = full.trim().split(/\s+/);
  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" ") || "",
  };
}

export function toGhlContact(kind: "apply" | "align", payload: Record<string, unknown>) {
  const rawName = String(payload.founderName || payload.name || "").trim();
  const { firstName, lastName } = splitName(rawName);
  const notes = Object.entries(payload)
    .map(([k, v]) => `${k}: ${String(v ?? "")}`)
    .join("\n");

  return {
    locationId: LOCATION_ID,
    formId: APPLY_FORM_ID,
    first_name: firstName,
    last_name: lastName,
    firstName,
    lastName,
    name: rawName,
    email: String(payload.email || ""),
    phone: String(payload.phone || ""),
    company: String(payload.companyName || payload.organization || ""),
    website: String(payload.website || ""),
    tags: kind === "apply" ? ["speed-to-scale", "dcrbn-website"] : ["strategic-alignment", "dcrbn-website"],
    source: kind === "apply" ? "www.dcrbn.io/apply" : "www.dcrbn.io/strategic-alignment",
    "contact.company_stage": String(payload.stage || ""),
    "contact.where_are_you_most_stuck": String(payload.accelerate || payload.message || ""),
    "contact.biggest_jump_if_solved_in_90_days": String(payload.support || payload.ways || ""),
    "contact.what_have_you_already_tried": String(payload.traction || ""),
    "contact.next_stage_outcome_6_12_mo": String(payload.problem || payload.message || ""),
    "contact.linked_in_founder_profile": String(payload.website || ""),
    notes,
  };
}

export async function postJson(url: string, body: unknown) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Webhook ${url} failed (${res.status}): ${text.slice(0, 200)}`);
  }
  return text;
}
