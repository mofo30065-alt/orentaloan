import { defineRouting } from 'next-intl/routing';

/**
 * 10 langues cibles. FR = source de vérité, EN = 2ᵉ langue complète.
 * Les locales sans fichiers de traduction retombent sur le FR (voir request.ts) :
 * aucune page ne casse, il suffit d'ajouter messages/<locale>/*.json pour activer une langue.
 */
export const locales = ['fr', 'en', 'de', 'es', 'it', 'nl', 'pt', 'pl', 'ro', 'bg'] as const;

/** Locales entièrement traduites, prérendues statiquement. Les autres sont rendues à la demande. */
export const builtLocales = ['fr', 'en', 'es', 'de', 'it', 'nl', 'pt', 'pl', 'ro', 'bg'] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: 'fr',
  localePrefix: 'always',
  localeCookie: {
    name: 'SPARK_LOCALE',
    maxAge: 60 * 60 * 24 * 365,
  },
});
