import type { Article } from './types';
import { fr } from './fr';
import { en } from './en';

export type { Article, ArticleSection } from './types';

const byLocale: Record<string, Article[]> = { fr, en };

export function getArticles(locale: string): Article[] {
  const list = byLocale[locale] ?? fr;
  return [...list].sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleBySlug(locale: string, slug: string): Article | undefined {
  return getArticles(locale).find((article) => article.slug === slug);
}

export function getCategories(locale: string): string[] {
  return Array.from(new Set(getArticles(locale).map((article) => article.category)));
}

/** Slugs pour la génération statique (identiques quelle que soit la locale pour l'instant). */
export function getAllSlugs(): string[] {
  return fr.map((article) => article.slug);
}

export const PAGE_SIZE = 6;

export function paginate<T>(
  items: T[],
  page: number,
  size = PAGE_SIZE,
): { items: T[]; page: number; totalPages: number } {
  const totalPages = Math.max(1, Math.ceil(items.length / size));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * size;
  return { items: items.slice(start, start + size), page: current, totalPages };
}
