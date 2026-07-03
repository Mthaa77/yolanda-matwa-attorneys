import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    // Use raw SQL count to avoid stale Prisma Client model cache in dev.
    // $queryRaw (tagged template) parameterizes safely.
    const result = await db.$queryRaw<
      Array<{ count: bigint }>
    >`SELECT COUNT(*) as count FROM InsightsSubscriber WHERE status = 'active'`;
    const count = Number(result[0]?.count ?? 0);
    return NextResponse.json({ ok: true, count });
  } catch (err) {
    console.error("[insights-count] Failed:", err);
    // Fail gracefully — return 0 rather than erroring, so the UI can
    // simply hide the social-proof line if the count is unavailable.
    return NextResponse.json({ ok: true, count: 0 });
  }
}
