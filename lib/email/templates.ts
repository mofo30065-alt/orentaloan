import type { CountryLegal } from '@/data/countries';
import type { RequestFormValues } from '@/lib/validation/requestSchema';
import { buildAmortization, computeApr } from '@/lib/finance';
import { formatMoneyCents, formatPercent } from '@/lib/format';
import { BRAND } from './config';
import { strings, fmt, optionLabel } from './messages';

/**
 * Gabarits d'e-mails transactionnels (HTML + texte brut), rendus par fonctions pures.
 * Corps **client** localisés (lib/email/messages) ; e-mails **admin** en FR (usage interne).
 * Toute valeur saisie par l'utilisateur est échappée (esc) avant insertion dans le HTML.
 */

export interface EmailContent {
  subject: string;
  html: string;
  text: string;
}

export type SimParams = { montant: number; duree: number; taux: number };

/* Palette (violet) — assets e-mail, hex admis hors composants React. */
const C = {
  brand: '#4B2E93',
  accent: '#7C56E6',
  ink: '#1F1633',
  paper: '#F6F4FB',
  surface: '#FCFBFE',
  border: '#E7E2F5',
  muted: '#6B6280',
};

function esc(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const eur = (value: number, locale: string): string => formatMoneyCents(Math.round(value * 100), locale);

/** Phrase légale FR de repli (e-mails admin). */
const legalFr = (country: CountryLegal): string =>
  fmt(strings('fr').footerLegal, { days: country.coolingOffDays });

/* ---------- Fragments HTML réutilisables ---------- */

function footer(country: CountryLegal, legal: string): string {
  const { lender } = country;
  return `
    <tr><td style="padding:24px 32px;border-top:1px solid ${C.border};color:${C.muted};font-size:12px;line-height:1.6;">
      <strong style="color:${C.ink}">${esc(lender.name)}</strong> — ${esc(lender.legalForm)}, ${esc(lender.capital)}<br/>
      ${esc(lender.registration)} · ${esc(lender.regulatoryNumber)}<br/>
      ${esc(country.contact.email)} · ${esc(country.contact.phone)}<br/>
      <span style="color:${C.muted}">${esc(legal)}</span>
    </td></tr>`;
}

function layout(country: CountryLegal, title: string, content: string, legal?: string): string {
  return `<!doctype html>
<html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${esc(title)}</title></head>
<body style="margin:0;padding:24px;background:${C.paper};font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:${C.ink};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:${C.surface};border:1px solid ${C.border};border-radius:16px;overflow:hidden;">
    <tr><td style="padding:20px 32px;background:${C.brand};color:#fff;font-size:18px;font-weight:700;">
      ${BRAND}<span style="color:${C.accent}">.</span>
    </td></tr>
    <tr><td style="padding:32px;font-size:15px;line-height:1.65;">${content}</td></tr>
    ${footer(country, legal ?? legalFr(country))}
  </table>
</body></html>`;
}

function rows(items: [string, string][]): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0;border:1px solid ${C.border};border-radius:10px;overflow:hidden;">
    ${items
      .map(
        ([k, v], i) =>
          `<tr style="background:${i % 2 ? C.paper : C.surface}">
            <td style="padding:10px 14px;color:${C.muted};font-size:13px;width:45%;">${esc(k)}</td>
            <td style="padding:10px 14px;font-weight:600;font-size:14px;">${esc(v)}</td>
          </tr>`,
      )
      .join('')}
  </table>`;
}

const button = (href: string, text: string): string =>
  `<a href="${esc(href)}" style="display:inline-block;margin:8px 0;padding:12px 20px;background:${C.accent};color:${C.ink};font-weight:700;text-decoration:none;border-radius:9999px;">${esc(text)}</a>`;

const textFooter = (country: CountryLegal, legal: string): string =>
  `\n—\n${country.lender.name} — ${country.lender.legalForm}, ${country.lender.capital}\n${country.lender.registration} · ${country.lender.regulatoryNumber}\n${country.contact.email} · ${country.contact.phone}\n${legal}`;

/* ---------- Calcul de la simulation ---------- */

function simFigures(params: SimParams, locale: string) {
  const annualRate = params.taux / 100;
  const am = buildAmortization({ principal: params.montant, annualRate, termMonths: params.duree });
  const apr = computeApr({ principal: params.montant, annualRate, termMonths: params.duree });
  return {
    amount: eur(params.montant, locale),
    rate: formatPercent(annualRate, locale),
    apr: formatPercent(apr, locale),
    monthly: formatMoneyCents(am.monthlyPaymentCents, locale),
    totalCost: formatMoneyCents(am.totalInterestCents, locale),
    totalDue: formatMoneyCents(am.totalPaidCents, locale),
  };
}

/* ================= CLIENT (localisé) ================= */

/** C1 — accusé de réception d'une demande de financement. */
export function applicantAck(data: RequestFormValues, reference: string, locale: string, country: CountryLegal, siteUrl: string): EmailContent {
  const S = strings(locale);
  const legal = fmt(S.footerLegal, { days: country.coolingOffDays });
  const months = fmt(S.months, { n: data.durationMonths });
  const subject = fmt(S.ackSubject, { ref: reference });
  const content = `
    <p>${esc(fmt(S.greetingName, { name: data.firstName }))}</p>
    <p>${esc(S.ackIntro)}</p>
    ${rows([
      [S.lblRef, reference],
      [S.lblProject, optionLabel(locale, 'projectType', data.projectType)],
      [S.lblAmountWanted, eur(data.amount, locale)],
      [S.lblDurationWanted, months],
    ])}
    <p style="color:${C.muted};font-size:13px;">${esc(fmt(S.keepRef, { ref: reference }))}</p>
    <p style="margin-top:16px;font-weight:600;">${esc(S.nextTitle)}</p>
    <ul style="margin:6px 0 0;padding-left:18px;color:${C.ink};">
      <li>${esc(S.next1)}</li><li>${esc(S.next2)}</li><li>${esc(S.next3)}</li>
    </ul>
    <p style="margin-top:20px">${button(siteUrl, S.ctaSite)}</p>`;
  const text = `${fmt(S.greetingName, { name: data.firstName })}\n\n${S.ackIntro}\n${S.lblRef} : ${reference}\n${S.lblProject} : ${optionLabel(locale, 'projectType', data.projectType)} — ${eur(data.amount, locale)} / ${months}${textFooter(country, legal)}`;
  return { subject, html: layout(country, subject, content, legal), text };
}

/** C3 — accusé de réception d'un message de contact. */
export function contactAck(data: { name: string; message: string }, locale: string, country: CountryLegal): EmailContent {
  const S = strings(locale);
  const legal = fmt(S.footerLegal, { days: country.coolingOffDays });
  const subject = S.contactSubject;
  const content = `
    <p>${esc(fmt(S.greetingName, { name: data.name }))}</p>
    <p>${esc(S.contactIntro)}</p>
    <p style="color:${C.muted};font-size:13px;border-left:3px solid ${C.border};padding-left:12px;white-space:pre-wrap;">${esc(data.message)}</p>`;
  const text = `${fmt(S.greetingName, { name: data.name })}\n\n${S.contactIntro}\n\n${data.message}${textFooter(country, legal)}`;
  return { subject, html: layout(country, subject, content, legal), text };
}

/** C2 — envoi de la simulation par e-mail. */
export function simulationEmail(params: SimParams, locale: string, country: CountryLegal, siteUrl: string): EmailContent {
  const S = strings(locale);
  const legal = fmt(S.footerLegal, { days: country.coolingOffDays });
  const f = simFigures(params, locale);
  const subject = S.simSubject;
  const content = `
    <p>${esc(S.greeting)}</p>
    <p>${esc(S.simIntro)}</p>
    ${rows([
      [S.lblAmountBorrowed, f.amount],
      [S.lblDuration, fmt(S.months, { n: params.duree })],
      [S.lblRate, f.rate],
      [S.lblApr, f.apr],
      [S.lblMonthly, f.monthly],
      [S.lblTotalCost, f.totalCost],
      [S.lblTotalDue, f.totalDue],
    ])}
    <p style="color:${C.muted};font-size:12px;">${esc(S.simDisclaimer)}</p>
    <p style="margin-top:16px">${button(`${siteUrl}/${locale}/pre-diagnostic`, S.ctaEligibility)}</p>`;
  const text = `${S.simSubject}\n\n${S.lblAmountBorrowed} : ${f.amount}\n${S.lblDuration} : ${fmt(S.months, { n: params.duree })}\n${S.lblRate} : ${f.rate}\n${S.lblApr} : ${f.apr}\n${S.lblMonthly} : ${f.monthly}\n${S.lblTotalCost} : ${f.totalCost}\n${S.lblTotalDue} : ${f.totalDue}${textFooter(country, legal)}`;
  return { subject, html: layout(country, subject, content, legal), text };
}

/** C4 — confirmation d'inscription newsletter (double opt-in). */
export function newsletterConfirm(locale: string, country: CountryLegal, confirmUrl: string): EmailContent {
  const S = strings(locale);
  const legal = fmt(S.footerLegal, { days: country.coolingOffDays });
  const subject = S.nlSubject;
  const content = `
    <p>${esc(S.greeting)}</p>
    <p>${esc(S.nlIntro)}</p>
    <p style="margin-top:8px">${button(confirmUrl, S.nlCta)}</p>
    <p style="color:${C.muted};font-size:12px;">${esc(S.nlIgnore)}</p>`;
  const text = `${S.greeting}\n\n${S.nlIntro}\n${confirmUrl}\n\n${S.nlIgnore}${textFooter(country, legal)}`;
  return { subject, html: layout(country, subject, content, legal), text };
}

/* ================= ADMIN (FR interne) ================= */

const fr = (group: string, key: string) => optionLabel('fr', group, key);

/** A1 — notification interne : nouvelle demande de financement. */
export function adminApplication(data: RequestFormValues, reference: string, locale: string, country: CountryLegal, meta: { ip: string; date: string }): EmailContent {
  const subject = `Nouvelle demande ${reference} — ${fr('projectType', data.projectType)} ${eur(data.amount, locale)}`;
  const content = `
    <p style="font-weight:700;font-size:16px;">Nouvelle demande de financement</p>
    ${rows([
      ['Référence', reference],
      ['Reçue le', meta.date],
      ['Type de projet', fr('projectType', data.projectType)],
      ['Montant', eur(data.amount, locale)],
      ['Durée', `${data.durationMonths} mois`],
      ['Situation familiale', fr('maritalStatus', data.maritalStatus)],
      ['Personnes à charge', String(data.dependents)],
      ['Logement', fr('housingStatus', data.housingStatus)],
      ['Revenus nets mensuels', eur(data.monthlyIncome, locale)],
      ['Charges / crédits mensuels', eur(data.monthlyCharges, locale)],
      ['Situation professionnelle', fr('employmentStatus', data.employmentStatus)],
      ['Ancienneté', fr('seniority', data.seniority)],
      ['Profession', data.profession ?? '—'],
      ['Incident FICP / FCC', fr('incident', data.incident)],
      ['Nom', `${data.firstName} ${data.lastName}`],
      ['E-mail', data.email],
      ['Téléphone', data.phone],
      ['Code postal', data.postalCode],
      ['Ville', data.city],
      ['Locale', locale],
      ['IP', meta.ip],
    ])}`;
  const text = `Nouvelle demande ${reference} (${meta.date})\n${data.firstName} ${data.lastName} — ${data.email} — ${data.phone}\nProjet : ${fr('projectType', data.projectType)}, ${eur(data.amount, locale)} / ${data.durationMonths} mois\nRevenus ${eur(data.monthlyIncome, locale)} · Charges ${eur(data.monthlyCharges, locale)}\nEmploi : ${fr('employmentStatus', data.employmentStatus)} (${fr('seniority', data.seniority)}) · FICP : ${fr('incident', data.incident)}\n${data.postalCode} ${data.city} · ${locale} · IP ${meta.ip}`;
  return { subject, html: layout(country, subject, content), text };
}

/** A2 — notification interne : nouveau message de contact. */
export function adminContact(data: { name: string; email: string; subject?: string; message: string }, country: CountryLegal): EmailContent {
  const subject = `Nouveau message de contact — ${data.name}`;
  const content = `
    <p style="font-weight:700;font-size:16px;">Nouveau message de contact</p>
    ${rows([
      ['Nom', data.name],
      ['E-mail', data.email],
      ['Objet', data.subject && data.subject.trim() ? data.subject : '—'],
    ])}
    <p style="white-space:pre-wrap;background:${C.paper};border:1px solid ${C.border};border-radius:10px;padding:14px;">${esc(data.message)}</p>`;
  const text = `Nouveau message de ${data.name} <${data.email}>\nObjet : ${data.subject ?? '—'}\n\n${data.message}`;
  return { subject, html: layout(country, subject, content), text };
}

/** A3 — notification interne : nouveau lead simulation. */
export function adminSimulationLead(email: string, params: SimParams, locale: string, country: CountryLegal): EmailContent {
  const subject = `Nouveau lead simulation — ${email}`;
  const f = simFigures(params, locale);
  const content = `
    <p style="font-weight:700;font-size:16px;">Demande de simulation par e-mail</p>
    ${rows([
      ['E-mail', email],
      ['Montant', f.amount],
      ['Durée', `${params.duree} mois`],
      ['Taux', f.rate],
      ['TAEG', f.apr],
      ['Mensualité', f.monthly],
      ['Locale', locale],
    ])}`;
  const text = `Lead simulation : ${email}\n${f.amount} / ${params.duree} mois / ${f.rate} — mensualité ${f.monthly}, TAEG ${f.apr} · ${locale}`;
  return { subject, html: layout(country, subject, content), text };
}

/** A4 — notification interne : inscription newsletter confirmée. */
export function adminNewsletter(email: string, locale: string, country: CountryLegal): EmailContent {
  const subject = `Newsletter — inscription confirmée : ${email}`;
  const content = `
    <p style="font-weight:700;font-size:16px;">Inscription newsletter confirmée (double opt-in)</p>
    ${rows([
      ['E-mail', email],
      ['Locale', locale],
    ])}`;
  const text = `Inscription newsletter confirmée : ${email} (${locale})`;
  return { subject, html: layout(country, subject, content), text };
}
