import type { CreditProduct } from './types';
import { creditProducts } from './products';

export * from './types';
export { creditProducts };

export const featuredCredits = creditProducts.filter((credit) => credit.featured);
export const classicCredits = creditProducts.filter((credit) => !credit.featured);
export const creditSlugs = creditProducts.map((credit) => credit.slug);

export function getCreditBySlug(slug: string): CreditProduct | undefined {
  return creditProducts.find((credit) => credit.slug === slug);
}
