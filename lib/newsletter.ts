import { createHmac, timingSafeEqual } from 'node:crypto';

/**
 * Jeton de confirmation newsletter (double opt-in) sans base de données :
 * HMAC-SHA256 de l'e-mail. Le lien de confirmation est vérifiable de façon autonome.
 * La persistance réelle de l'abonnement relève du CRM (à brancher).
 */
const secret = (): string =>
  process.env.NEWSLETTER_SECRET ?? process.env.RESEND_API_KEY ?? 'orentaloan-dev-secret';

export function signEmail(email: string): string {
  return createHmac('sha256', secret()).update(email.trim().toLowerCase()).digest('hex');
}

export function verifyEmail(email: string, token: string): boolean {
  const expected = signEmail(email);
  if (expected.length !== token.length) return false;
  return timingSafeEqual(Buffer.from(expected), Buffer.from(token));
}
