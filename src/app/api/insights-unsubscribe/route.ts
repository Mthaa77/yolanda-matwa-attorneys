import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.object({
  email: z.string().email().max(200),
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
      { ok: false, error: "Invalid email address." },
      { status: 422 },
    );
  }

  const { email } = parsed.data;

  try {
    // Use raw SQL to avoid stale Prisma Client cache in the dev server.
    // Sets status to 'unsubscribed' rather than deleting the record, so we
    // honour the unsubscribe permanently (POPIA compliance: a deleted record
    // could be re-added if the same email signs up again, briefly resuming
    // emails before a future unsubscribe — keeping the row prevents that).
    await db.$executeRaw`
      UPDATE InsightsSubscriber
      SET status = 'unsubscribed', updatedAt = datetime('now')
      WHERE email = ${email}
    `;
  } catch (err) {
    console.error("[insights-unsubscribe] Failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not unsubscribe. Please email us." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
