import { NextResponse } from 'next/server';
import { sendSimulationEmails } from '@/lib/email';

/**
 * Réception d'une demande d'envoi de simulation par e-mail : valide l'adresse et les
 * paramètres (montant / durée / taux), puis envoie l'estimation au client et le lead à l'admin.
 */
const num = (value: unknown): number | null =>
  typeof value === 'number' && Number.isFinite(value) ? value : null;

export async function POST(request: Request): Promise<NextResponse> {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const body = payload as { email?: unknown; locale?: unknown; params?: Record<string, unknown> };
  const email = body.email;
  if (typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 422 });
  }

  const montant = num(body.params?.montant);
  const duree = num(body.params?.duree);
  const taux = num(body.params?.taux);
  if (montant === null || duree === null || taux === null) {
    return NextResponse.json({ ok: false, error: 'invalid_params' }, { status: 422 });
  }

  const locale = typeof body.locale === 'string' ? body.locale : 'fr';
  await sendSimulationEmails(email, { montant, duree, taux }, locale);

  return NextResponse.json({ ok: true });
}
