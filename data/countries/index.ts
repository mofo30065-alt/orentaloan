import type { CountryLegal } from './types';
import { fr } from './fr';
import { en } from './en';
import { es } from './es';
import { de } from './de';
import { it } from './it';
import { nl } from './nl';
import { pt } from './pt';
import { pl } from './pl';
import { ro } from './ro';
import { bg } from './bg';

const byLocale: Record<string, CountryLegal> = { fr, en, es, de, it, nl, pt, pl, ro, bg };

/** Renvoie les données légales du pays associé à la locale (fr → France). */
export function getCountryLegal(locale: string): CountryLegal {
  return byLocale[locale] ?? fr;
}

export type { CountryLegal } from './types';
