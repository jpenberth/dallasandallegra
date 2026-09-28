import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  const sql = neon(url);
  await sql`
    CREATE TABLE IF NOT EXISTS subscribers (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      source TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  return sql;
}

export async function POST(req: NextRequest) {
  let body: { email?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const source = body.source?.slice(0, 64) ?? "site";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    const sql = await getSql();

    if (!sql) {
      // No database connected yet — log so submissions aren't silently lost
      // during local development or before Storage is wired up in Vercel.
      console.warn(
        `[subscribe] DATABASE_URL not set — dropped signup for ${email} (source: ${source})`
      );
      return NextResponse.json({ ok: true, persisted: false });
    }

    await sql`
      INSERT INTO subscribers (email, source)
      VALUES (${email}, ${source})
      ON CONFLICT (email) DO NOTHING
    `;

    return NextResponse.json({ ok: true, persisted: true });
  } catch (err) {
    console.error("[subscribe] failed", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
