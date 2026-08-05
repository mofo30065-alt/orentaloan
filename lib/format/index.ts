/**
 * Formatage localisé via Intl (voir CLAUDE.md §6). Jamais de séparateur ou de symbole
 * codé à la main. Les formatters sont mémoïsés par locale.
 * Devise unique : EUR (zone euro). La locale décide de la présentation (position du €,
 * séparateurs de milliers et de décimales).
 */

type Kind = 'money' | 'moneyRounded' | 'percent' | 'number';

const OPTIONS: Record<Kind, Intl.NumberFormatOptions> = {
  money: { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 },
  moneyRounded: { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 },
  percent: { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 },
  number: { maximumFractionDigits: 0 },
};

const cache = new Map<string, Intl.NumberFormat>();

function formatter(locale: string, kind: Kind): Intl.NumberFormat {
  const key = `${locale}:${kind}`;
  let instance = cache.get(key);
  if (!instance) {
    instance = new Intl.NumberFormat(locale, OPTIONS[kind]);
    cache.set(key, instance);
  }
  return instance;
}

/** Centimes entiers -> montant localisé avec décimales (« 358,50 € »). */
export function formatMoneyCents(cents: number, locale: string): string {
  return formatter(locale, 'money').format(cents / 100);
}

/** Centimes entiers -> montant localisé arrondi à l'euro (« 15 000 € »). */
export function formatMoneyCentsRounded(cents: number, locale: string): string {
  return formatter(locale, 'moneyRounded').format(cents / 100);
}

/** Euros -> montant localisé arrondi à l'euro (pour les valeurs de sliders). */
export function formatMoneyRounded(euros: number, locale: string): string {
  return formatter(locale, 'moneyRounded').format(euros);
}

/** Fraction décimale -> pourcentage localisé (0.0712 -> « 7,12 % »). */
export function formatPercent(fraction: number, locale: string): string {
  return formatter(locale, 'percent').format(fraction);
}

/** Entier localisé (séparateurs de milliers). */
export function formatNumber(value: number, locale: string): string {
  return formatter(locale, 'number').format(value);
}

const dateCache = new Map<string, Intl.DateTimeFormat>();

/** Date ISO -> date localisée longue (« 15 juin 2026 »). */
export function formatDate(iso: string, locale: string): string {
  let instance = dateCache.get(locale);
  if (!instance) {
    instance = new Intl.DateTimeFormat(locale, { dateStyle: 'long' });
    dateCache.set(locale, instance);
  }
  return instance.format(new Date(iso));
}
