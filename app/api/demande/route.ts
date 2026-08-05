import { NextResponse } from 'next/server';
import { buildRequestSchema } from '@/lib/validation/requestSchema';
import { sendApplicationEmails } from '@/lib/email';

/**
 * Réception d'une demande de financement. Couche d'abstraction : validation, anti-spam
 * (honeypot + rate limiting) et accusé de réception avec référence. La destination réelle
 * (CRM / e-mail / Google Sheet) est branchée plus tard — voir CLAUDE.md §10.
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

function reference(): string {
  return `SL-${Date.now().toString(36).toUpperCase()}`;
}

// Validation serveur : messages en clés brutes (l'affichage traduit est côté client).
const schema = buildRequestSchema((key) => key);

export async function POST(request: Request): Promise<NextResponse> {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'local';
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot rempli : on renvoie un accusé neutre sans traiter.
  const website = (payload as { website?: unknown }).website;
  if (typeof website === 'string' && website.length > 0) {
    return NextResponse.json({ ok: true, reference: reference() });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'validation' }, { status: 422 });
  }

  const locale = typeof (payload as { locale?: unknown }).locale === 'string'
    ? (payload as { locale: string }).locale
    : 'fr';
  const ref = reference();

  // Accusé de réception client + notification interne (échec e-mail sans incidence sur la réponse).
  await sendApplicationEmails(parsed.data, ref, locale, { ip });

  // TODO(intégration) : transmettre parsed.data au CRM / stockage durable.
  return NextResponse.json({ ok: true, reference: ref });
}
