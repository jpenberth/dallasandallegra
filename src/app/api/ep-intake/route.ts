import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export const runtime = "nodejs";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/myeklokd";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = {
  fullName?: string;
  entityName?: string;
  email?: string;
  phone?: string;
  mailingAddress?: string;
  tier?: string;
  seedSparkName?: string;
  notes?: string;
};

async function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  const sql = neon(url);
  await sql`
    CREATE TABLE IF NOT EXISTS ep_intake (
      id SERIAL PRIMARY KEY,
      full_name TEXT NOT NULL,
      entity_name TEXT,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      mailing_address TEXT NOT NULL,
      tier TEXT NOT NULL,
      seedspark_name TEXT,
      notes TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  return sql;
}

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = body.fullName?.trim();
  const entityName = body.entityName?.trim() || null;
  const email = body.email?.trim().toLowerCase();
  const phone = body.phone?.trim();
  const mailingAddress = body.mailingAddress?.trim();
  const tier = body.tier?.trim();
  const seedSparkName = body.seedSparkName?.trim() || null;
  const notes = body.notes?.trim() || null;

  if (!fullName) {
    return NextResponse.json({ error: "Enter your full legal name." }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (!phone) {
    return NextResponse.json({ error: "Enter a phone number." }, { status: 400 });
  }
  if (!mailingAddress) {
    return NextResponse.json({ error: "Enter your mailing address." }, { status: 400 });
  }
  if (tier !== "$2,500+" && tier !== "$5,000+") {
    return NextResponse.json({ error: "Select the tier you pledged." }, { status: 400 });
  }

  let persisted = false;
  try {
    const sql = await getSql();
    if (sql) {
      await sql`
        INSERT INTO ep_intake
          (full_name, entity_name, email, phone, mailing_address, tier, seedspark_name, notes)
        VALUES
          (${fullName}, ${entityName}, ${email}, ${phone}, ${mailingAddress}, ${tier}, ${seedSparkName}, ${notes})
      `;
      persisted = true;
    } else {
      console.warn(`[ep-intake] DATABASE_URL not set — submission for ${email} was not stored`);
    }
  } catch (err) {
    console.error("[ep-intake] database insert failed", err);
  }

  let notified = false;
  if (FORMSPREE_ENDPOINT) {
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          subject: `New Executive Producer intake: ${fullName} (${tier})`,
          fullName,
          entityName,
          email,
          phone,
          mailingAddress,
          tier,
          seedSparkName,
          notes,
        }),
      });
      notified = res.ok;
      if (!res.ok) {
        console.error("[ep-intake] Formspree notification failed", await res.text());
      }
    } catch (err) {
      console.error("[ep-intake] Formspree request failed", err);
    }
  } else {
    console.warn(
      `[ep-intake] FORMSPREE_ENDPOINT not configured — no email sent for ${email}`
    );
  }

  return NextResponse.json({ ok: true, persisted, notified });
}
