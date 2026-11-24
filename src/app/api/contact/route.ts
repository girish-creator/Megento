import { NextResponse } from "next/server";
import { sendLead } from "@/lib/crm";
import { leadSchema } from "@/lib/validation";

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }
  const { website: _hp, consent: _c, ...lead } = parsed.data;
  try {
    await sendLead(lead);
  } catch {
    return NextResponse.json({ error: "Could not send your request. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
