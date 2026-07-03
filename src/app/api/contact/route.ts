import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  phone: z
    .string()
    .min(6)
    .max(40)
    .regex(/^[0-9+\s()-]+$/),
  service: z.string().min(1).max(200),
  message: z.string().min(10).max(5000),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const { name, email, phone, service, message } = parsed.data;

  try {
    await db.contactEnquiry.create({
      data: { name, email, phone, service, message },
    });
  } catch (err) {
    console.error("[contact] Failed to persist enquiry:", err);
    // Still return success to the user — we don't want to leak DB errors,
    // but log it server-side so it can be followed up.
    return NextResponse.json(
      { ok: false, error: "Could not store your enquiry. Please call us." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
