import { Resend } from 'resend';
import type { RequestFormValues } from '@/lib/validation/requestSchema';
import { emailConfig, hasResend } from './config';
import {
  applicantAck,
  adminApplication,
  contactAck,
  adminContact,
  simulationEmail,
  adminSimulationLead,
  newsletterConfirm,
  adminNewsletter,
  type EmailContent,
  type SimParams,
} from './templates';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://orentaloan.example';

/**
 * Envoi transactionnel via Resend. Sans clé configurée, on journalise et on ignore
 * (le build et le dev fonctionnent sans secret). Aucune erreur n'est propagée :
 * un échec d'e-mail ne doit jamais casser la réponse de l'API.
 */
async function deliver(
  from: string,
  to: string,
  replyTo: string | undefined,
  mail: EmailContent,
): Promise<void> {
  if (!hasResend()) {
    console.warn(`[email] RESEND_API_KEY manquant — e-mail ignoré : "${mail.subject}" → ${to}`);
    return;
  }
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from,
      to,
      replyTo,
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
    });
  } catch (error) {
    console.error(`[email] échec d'envoi "${mail.subject}" → ${to}`, error);
  }
}

/** Demande de financement : accusé au client (C1) + notification interne (A1). */
export async function sendApplicationEmails(
  data: RequestFormValues,
  reference: string,
  locale: string,
  meta: { ip: string },
): Promise<void> {
  const cfg = emailConfig(locale);
  const date = new Date().toLocaleString('fr-FR');
  await Promise.all([
    deliver(cfg.from, data.email, cfg.replyTo, applicantAck(data, reference, locale, cfg.country, siteUrl)),
    deliver(cfg.from, cfg.admin, data.email, adminApplication(data, reference, locale, cfg.country, { ip: meta.ip, date })),
  ]);
}

/** Contact : accusé au client (C3) + notification interne (A2). */
export async function sendContactEmails(
  data: { name: string; email: string; subject?: string; message: string },
  locale: string,
): Promise<void> {
  const cfg = emailConfig(locale);
  await Promise.all([
    deliver(cfg.from, data.email, cfg.replyTo, contactAck(data, locale, cfg.country)),
    deliver(cfg.from, cfg.admin, data.email, adminContact(data, cfg.country)),
  ]);
}

/** Newsletter (double opt-in) : e-mail de confirmation au futur abonné (C4). */
export async function sendNewsletterConfirm(
  email: string,
  locale: string,
  confirmUrl: string,
): Promise<void> {
  const cfg = emailConfig(locale);
  await deliver(cfg.from, email, cfg.replyTo, newsletterConfirm(locale, cfg.country, confirmUrl));
}

/** Newsletter confirmée : notification interne (A4). */
export async function sendAdminNewsletterConfirmed(email: string, locale: string): Promise<void> {
  const cfg = emailConfig(locale);
  await deliver(cfg.from, cfg.admin, email, adminNewsletter(email, locale, cfg.country));
}

/** Simulation : envoi au client (C2) + lead interne (A3). */
export async function sendSimulationEmails(
  email: string,
  params: SimParams,
  locale: string,
): Promise<void> {
  const cfg = emailConfig(locale);
  await Promise.all([
    deliver(cfg.from, email, cfg.replyTo, simulationEmail(params, locale, cfg.country, siteUrl)),
    deliver(cfg.from, cfg.admin, email, adminSimulationLead(email, params, locale, cfg.country)),
  ]);
}
