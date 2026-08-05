import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/lib/i18n/navigation';
import { getArticles, getCategories, paginate } from '@/data/blog';
import { blogCover } from '@/lib/blogCover';
import { formatDate } from '@/lib/format';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/common/Eyebrow';
import { IconArrowRight } from '@/components/common/icons';
import { cn } from '@/lib/utils';

type PageParams = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog.meta' });
  return { title: t('title'), description: t('description') };
}

function hrefFor(categorie: string | undefined, page: number): string {
  const params = new URLSearchParams();
  if (categorie) params.set('categorie', categorie);
  if (page > 1) params.set('page', String(page));
  const qs = params.toString();
  return qs ? `/blog?${qs}` : '/blog';
}

export default async function BlogPage({ params, searchParams }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('blog');
  const query = await searchParams;

  const activeCategory = typeof query.categorie === 'string' ? query.categorie : undefined;
  const pageParam = typeof query.page === 'string' ? Number.parseInt(query.page, 10) : 1;

  const categories = getCategories(locale);
  const all = getArticles(locale);
  const filtered = activeCategory
    ? all.filter((article) => article.category === activeCategory)
    : all;
  const { items, page, totalPages } = paginate(filtered, Number.isFinite(pageParam) ? pageParam : 1);

  const chipClass = (active: boolean) =>
    cn(
      'rounded-pill border px-md py-2xs text-small transition-colors',
      active
        ? 'border-accent bg-accent/10 text-text'
        : 'border-border text-text-muted hover:border-accent/60',
    );

  return (
    <Section>
      <Container>
        <div className="max-w-prose">
          <Eyebrow>{t('title')}</Eyebrow>
          <h1 className="mt-sm text-display">{t('title')}</h1>
          <p className="mt-md text-h3 font-normal text-text-muted">{t('intro')}</p>
        </div>

        <div className="mt-xl flex flex-wrap gap-sm">
          <Link href={hrefFor(undefined, 1)} className={chipClass(!activeCategory)}>
            {t('filterAll')}
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={hrefFor(category, 1)}
              className={chipClass(activeCategory === category)}
            >
              {t(`categories.${category}`)}
            </Link>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="mt-xl text-base text-text-muted">{t('empty')}</p>
        ) : (
          <div className="mt-lg grid gap-md md:grid-cols-2 lg:grid-cols-3">
            {items.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-accent"
              >
                <img
                  src={blogCover(article.slug)}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-lg">
                  <div className="flex items-center gap-xs text-micro uppercase tracking-wide text-text-muted">
                    <span className="text-brand">{t(`categories.${article.category}`)}</span>
                    <span aria-hidden>·</span>
                    <span>{t('minutes', { count: article.readingMinutes })}</span>
                  </div>
                  <h2 className="mt-sm text-h3">{article.title}</h2>
                  <p className="mt-2xs flex-1 text-small text-text-muted">{article.excerpt}</p>
                  <span className="mt-md text-micro text-text-muted">
                    {formatDate(article.date, locale)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {totalPages > 1 ? (
          <nav className="mt-xl flex items-center justify-between gap-md" aria-label="pagination">
            {page > 1 ? (
              <Link href={hrefFor(activeCategory, page - 1)} className="text-small text-brand hover:underline">
                {t('pagination.previous')}
              </Link>
            ) : (
              <span />
            )}
            <span className="text-small text-text-muted">
              {t('pagination.page', { current: page, total: totalPages })}
            </span>
            {page < totalPages ? (
              <Link
                href={hrefFor(activeCategory, page + 1)}
                className="inline-flex items-center gap-2xs text-small text-brand hover:underline"
              >
                {t('pagination.next')}
                <IconArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <span />
            )}
          </nav>
        ) : null}
      </Container>
    </Section>
  );
}
