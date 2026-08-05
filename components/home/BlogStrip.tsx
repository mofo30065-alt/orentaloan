import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { getArticles } from '@/data/blog';
import { blogCover } from '@/lib/blogCover';
import { formatDate } from '@/lib/format';

/** Les 3 derniers articles réels de la langue courante (aucun lien mort). */
export function BlogStrip({ locale }: { locale: string }) {
  const t = useTranslations('blog');
  const articles = getArticles(locale).slice(0, 3);

  return (
    <div className="grid gap-md lg:grid-cols-3">
      {articles.map((article) => (
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
          <h3 className="mt-sm flex-1 text-h3">{article.title}</h3>
          <span className="mt-md text-micro text-text-muted">{formatDate(article.date, locale)}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
