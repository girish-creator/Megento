import type { Lead } from "./validation";

// Forward leads to an EU-hosted CRM or automation webhook. Server-side only.
export async function sendLead(lead: Omit<Lead, "website" | "consent">) {
  const url = process.env.CRM_WEBHOOK_URL;
  if (!url) {
    console.warn("CRM_WEBHOOK_URL is not set; lead was not stored.");
    return;
  }
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error(`CRM responded with ${res.status}`);
}
