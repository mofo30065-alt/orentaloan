import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/lib/i18n/navigation';
import { getAllSlugs, getArticleBySlug, getArticles } from '@/data/blog';
import { blogCover } from '@/lib/blogCover';
import { formatDate } from '@/lib/format';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { buttonVariants } from '@/components/ui/Button';
import { IconArrowRight } from '@/components/common/icons';
import { ShareButtons } from '@/components/blog/ShareButtons';

type PageParams = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(locale, slug);
  if (!article) return {};
  return { title: `${article.title} — Spark loan`, description: article.excerpt };
}

export default async function ArticlePage({ params }: PageParams) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(locale, slug);
  if (!article) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('blog');

  const suggested = getArticles(locale)
    .filter((entry) => entry.slug !== article.slug)
    .sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category))
    .slice(0, 2);

  return (
    <>
      <Section className="pt-lg md:pt-xl">
        <Container>
          <div className="mx-auto max-w-prose">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2xs text-micro text-text-muted hover:text-text"
            >
              <span aria-hidden>‹</span>
              {t('backToList')}
            </Link>

            <div className="mt-lg flex items-center gap-xs text-micro uppercase tracking-wide text-text-muted">
              <span className="text-brand">{t(`categories.${article.category}`)}</span>
              <span aria-hidden>·</span>
              <span>{t('minutes', { count: article.readingMinutes })}</span>
            </div>

            <h1 className="mt-sm text-h1">{article.title}</h1>
            <p className="mt-md text-h3 font-normal text-text-muted">{article.excerpt}</p>
            <p className="mt-md text-small text-text-muted">
              {t('byAuthor', { author: article.author })} · {formatDate(article.date, locale)}
            </p>

            <img
              src={blogCover(article.slug)}
              alt=""
              className="mt-lg aspect-[16/9] w-full rounded-lg object-cover"
            />

            <div className="mt-xl space-y-lg">
              {article.body.map((section, index) => (
                <div key={section.heading ?? index}>
                  {section.heading ? <h2 className="text-h3">{section.heading}</h2> : null}
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-2xs text-base leading-relaxed text-text">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-xl border-t border-border pt-lg">
              <ShareButtons />
            </div>

            <div className="mt-xl rounded-lg border border-brand/20 bg-brand/5 p-lg">
              <h2 className="text-h3 text-brand">{t('cta.title')}</h2>
              <p className="mt-2xs text-base text-text">{t('cta.body')}</p>
              <Link
                href="/pre-diagnostic"
                className={`${buttonVariants({ variant: 'accent', size: 'md' })} mt-md`}
              >
                {t('cta.action')}
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto max-w-prose">
            <h2 className="text-h2">{t('suggestedTitle')}</h2>
            <div className="mt-lg grid gap-md sm:grid-cols-2">
              {suggested.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/blog/${entry.slug}`}
                  className="group flex flex-col rounded-lg border border-border bg-bg p-lg transition-colors hover:border-accent"
                >
                  <span className="text-micro uppercase tracking-wide text-brand">
                    {t(`categories.${entry.category}`)}
                  </span>
                  <span className="mt-sm text-h3 text-text">{entry.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
