/**
 * Contenu du blog (par langue). Un article = métadonnées + corps structuré en sections.
 * Structure volontairement simple pour être remplaçable par un CMS plus tard.
 */
export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
}

export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  /** Date ISO (AAAA-MM-JJ). */
  date: string;
  readingMinutes: number;
  body: ArticleSection[];
}
