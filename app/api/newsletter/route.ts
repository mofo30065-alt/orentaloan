import { NextResponse } from 'next/server';
import { signEmail } from '@/lib/newsletter';
import { sendNewsletterConfirm } from '@/lib/email';
import { siteUrl } from '@/lib/siteUrl';

/**
 * Inscription newsletter (double opt-in) : valide l'adresse, anti-spam (honeypot + rate
 * limit), puis envoie un e-mail de confirmation avec un lien signé. Aucun abonnement n'est
 * enregistré avant le clic de confirmation (RGPD). Persistance CRM = TODO.
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

  // Honeypot rempli : accusé neutre sans traitement.
  if (typeof payload.website === 'string' && payload.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!isEmail(payload.email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 422 });
  }

  const locale = typeof payload.locale === 'string' ? payload.locale : 'fr';
  const email = payload.email;
  const token = signEmail(email);
  const confirmUrl = `${siteUrl}/${locale}/newsletter/confirmer?email=${encodeURIComponent(email)}&token=${token}`;

  await sendNewsletterConfirm(email, locale, confirmUrl);

  return NextResponse.json({ ok: true });
}
