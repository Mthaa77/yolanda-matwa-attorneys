import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.object({
  email: z.string().email().max(200),
  consent: z.boolean().refine((v) => v === true, {
    message: "Consent is required to subscribe.",
  }),
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

  const { email, consent } = parsed.data;

  try {
    // Use raw SQL to avoid any stale Prisma Client model cache from the
    // running dev server (the InsightsSubscriber model was added after the
    // server started). $executeRaw (tagged template) parameterizes safely.
    const consentVal = consent ? 1 : 0;
    await db.$executeRaw`
      INSERT OR REPLACE INTO InsightsSubscriber (id, email, consent, status, createdAt, updatedAt)
      VALUES (
        COALESCE((SELECT id FROM InsightsSubscriber WHERE email = ${email}), lower(hex(randomblob(16)))),
        ${email},
        ${consentVal},
        'active',
        COALESCE((SELECT createdAt FROM InsightsSubscriber WHERE email = ${email}), datetime('now')),
        datetime('now')
      )
    `;
  } catch (err) {
    console.error("[insights-subscribe] Failed to store subscriber:", err);
    return NextResponse.json(
      { ok: false, error: "Could not subscribe. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
