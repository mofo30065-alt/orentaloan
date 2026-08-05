/**
 * Navigation principale. Les libellés vivent dans messages/<locale>/common.json
 * sous la clé `nav.<key>` — ici on ne stocke que la structure.
 */
export type NavKey = 'credits' | 'simulator' | 'diagnostic' | 'blog' | 'contact';

export interface NavItem {
  key: NavKey;
  href: string;
}

export const mainNav: NavItem[] = [
  { key: 'credits', href: '/credits' },
  { key: 'simulator', href: '/simulateur' },
  { key: 'diagnostic', href: '/pre-diagnostic' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contact' },
];
