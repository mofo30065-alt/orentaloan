import { NextResponse } from 'next/server';
import { sendContactEmails } from '@/lib/email';

/**
 * Réception d'un message de contact. Anti-spam (honeypot + rate limiting) et accusé de
 * réception. La destination réelle (boîte / CRM) est branchée plus tard — voir CLAUDE.md §10.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; reset: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

const isEmail = (value: unknown): value is string =>
  typeof value === 'string' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);

export async function POST(request: Request): Promise<NextResponse> {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'local';
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  if (typeof payload.website === 'string' && payload.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';
  if (name.length < 2 || !isEmail(payload.email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: 'validation' }, { status: 422 });
  }

  const locale = typeof payload.locale === 'string' ? payload.locale : 'fr';
  const subject = typeof payload.subject === 'string' ? payload.subject : undefined;

  // Accusé de réception client + notification interne.
  await sendContactEmails({ name, email: payload.email, subject, message }, locale);

  return NextResponse.json({ ok: true });
}
