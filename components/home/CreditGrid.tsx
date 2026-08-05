import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { classicCredits, featuredCredits } from '@/data/credits';
import { IconArrowRight } from '@/components/common/icons';

export function CreditGrid() {
  const t = useTranslations('home.credits');
  const tc = useTranslations('credits.products');

  return (
    <div>
      <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
        {featuredCredits.map((credit) => (
          <Link
            key={credit.slug}
            href={`/credits/${credit.slug}`}
            className="group flex flex-col rounded-lg border border-border bg-surface p-lg transition-colors hover:border-accent"
          >
            <h3 className="text-h3">{tc(`${credit.slug}.name`)}</h3>
            <p className="mt-2xs flex-1 text-small text-text-muted">{tc(`${credit.slug}.teaser`)}</p>
            <IconArrowRight className="mt-md h-5 w-5 text-brand transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>

      <div className="mt-lg">
        <h3 className="text-micro font-semibold uppercase tracking-wide text-text-muted">
          {t('alsoTitle')}
        </h3>
        <ul className="mt-sm flex flex-wrap gap-x-lg gap-y-xs">
          {classicCredits.map((credit) => (
            <li key={credit.slug}>
              <Link
                href={`/credits/${credit.slug}`}
                className="text-small text-text hover:text-brand"
              >
                {tc(`${credit.slug}.name`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/credits"
        className="mt-lg inline-flex items-center gap-2xs text-base font-medium text-brand hover:underline"
      >
        {t('allLink')}
        <IconArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
