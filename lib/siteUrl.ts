/**
 * Base URL publique du site, normalisée et garantie valide.
 *
 * Tolère une valeur d'environnement sans schéma (ex. « orentaloan.com » →
 * « https://orentaloan.com ») et retombe sur un défaut si la valeur est
 * invalide, pour qu'une variable `NEXT_PUBLIC_SITE_URL` mal saisie ne fasse
 * jamais planter `new URL(...)` au build (metadataBase, sitemap, e-mails).
 */
const FALLBACK = 'https://orentaloan.example';

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return FALLBACK;
  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    return new URL(withScheme).origin;
  } catch {
    return FALLBACK;
  }
}

/** Origine du site (schéma + hôte, sans slash final). */
export const siteUrl = resolveSiteUrl();
