import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

/**
 * Namespaces chargés pour chaque requête. Zéro texte en dur dans les composants.
 * Repli FR : on charge d'abord le FR (source de vérité) puis on superpose la locale.
 * Toute clé non encore traduite retombe donc sur le FR au lieu de casser la page.
 */
const namespaces = [
  'common',
  'home',
  'legal',
  'simulator',
  'diagnostic',
  'credits',
  'form',
  'blog',
  'faq',
  'contact',
] as const;

type Messages = Record<string, unknown>;

function isObject(value: unknown): value is Messages {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function deepMerge(base: Messages, overlay: Messages): Messages {
  const result: Messages = { ...base };
  for (const [key, value] of Object.entries(overlay)) {
    const current = result[key];
    result[key] = isObject(current) && isObject(value) ? deepMerge(current, value) : value;
  }
  return result;
}

async function loadNamespace(locale: string, namespace: string): Promise<Messages | undefined> {
  try {
    return (await import(`../../messages/${locale}/${namespace}.json`)).default as Messages;
  } catch {
    return undefined;
  }
}

async function loadMessages(locale: string): Promise<Messages> {
  const entries = await Promise.all(
    namespaces.map(async (namespace) => {
      const fallback = (await loadNamespace(routing.defaultLocale, namespace)) ?? {};
      if (locale === routing.defaultLocale) {
        return [namespace, fallback] as const;
      }
      const localized = await loadNamespace(locale, namespace);
      return [namespace, localized ? deepMerge(fallback, localized) : fallback] as const;
    }),
  );
  return Object.fromEntries(entries);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  return {
    locale,
    messages: await loadMessages(locale),
  };
});
