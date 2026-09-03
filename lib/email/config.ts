import { getCountryLegal, type CountryLegal } from '@/data/countries';

/** Nom de marque affiché dans les e-mails. */
export const BRAND = 'OrentaLoan';

export interface EmailConfig {
  country: CountryLegal;
  /** Expéditeur vérifié (domaine Resend). Par défaut : bac à sable Resend. */
  from: string;
  /** Destinataire interne (conseiller / boîte de suivi). */
  admin: string;
  /** Adresse de réponse proposée au client. */
  replyTo: string;
}

/** Résout l'expéditeur, l'admin et le reply-to pour une locale (données pays + env). */
export function emailConfig(locale: string): EmailConfig {
  const country = getCountryLegal(locale);
  return {
    country,
    from: process.env.EMAIL_FROM ?? `${BRAND} <onboarding@resend.dev>`,
    admin: process.env.EMAIL_ADMIN ?? country.contact.email,
    replyTo: process.env.EMAIL_REPLY_TO ?? country.contact.email,
  };
}

/** L'envoi réel n'a lieu que si une clé Resend est configurée. */
export const hasResend = (): boolean => Boolean(process.env.RESEND_API_KEY);
