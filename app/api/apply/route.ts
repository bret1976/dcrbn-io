import { NextResponse } from "next/server";
import { forwardSubmission } from "@/lib/submit";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;
  const founderName = String(body.founderName || "").trim();
  const companyName = String(body.companyName || "").trim();
  const email = String(body.email || "").trim();
  if (!founderName || !companyName || !email) {
    return NextResponse.json(
      { error: "Founder name, company name, and email are required." },
      { status: 400 }
    );
  }
  try {
    await forwardSubmission("apply", body);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unable to submit application." },
      { status: 502 }
    );
  }
}
