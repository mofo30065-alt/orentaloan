'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import type { Reading } from '@/lib/diagnostic/types';
import { Button, buttonVariants } from '@/components/ui/Button';
import { IconArrowRight } from '@/components/common/icons';
import { cn } from '@/lib/utils';

const STATE_STYLE: Record<Reading['state'], { dot: string; ring: string }> = {
  go: { dot: 'bg-state-go', ring: 'border-state-go/30' },
  work: { dot: 'bg-state-work', ring: 'border-state-work/40' },
  stop: { dot: 'bg-state-stop', ring: 'border-state-stop/40' },
};

interface ReadingCardProps {
  reading: Reading;
  onRestart: () => void;
}

export function ReadingCard({ reading, onRestart }: ReadingCardProps) {
  const t = useTranslations('diagnostic');
  const style = STATE_STYLE[reading.state];

  return (
    <div className={cn('rounded-lg border bg-surface p-lg shadow-lift', style.ring)}>
      <div className="flex items-center gap-sm">
        <span className={cn('h-3 w-3 rounded-pill', style.dot)} />
        <p className="text-micro font-semibold uppercase tracking-wide text-text-muted">
          {t('result.title')}
        </p>
      </div>
      <h2 className="mt-sm text-h1">{t(`states.${reading.state}.label`)}</h2>
      <p className="mt-2xs text-base text-text-muted">{t(`states.${reading.state}.description`)}</p>

      <div className="mt-lg border-t border-border pt-lg">
        <h3 className="text-micro font-semibold uppercase tracking-wide text-text-muted">
          {t('result.reasonLabel')}
        </h3>
        <p className="mt-2xs text-base text-text">{t(`reasons.${reading.reasonKey}`)}</p>
      </div>

      {reading.leverKeys.length > 0 ? (
        <div className="mt-lg">
          <h3 className="text-micro font-semibold uppercase tracking-wide text-text-muted">
            {t('result.leversLabel')}
          </h3>
          <ul className="mt-sm space-y-xs">
            {reading.leverKeys.map((key) => (
              <li key={key} className="flex items-start gap-sm">
                <span className="mt-[7px] h-2 w-2 shrink-0 rounded-pill bg-accent" />
                <span className="text-base text-text">{t(`levers.${key}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {reading.resourceKey ? (
        <div className="mt-lg rounded-md border border-border bg-bg p-md">
          <h3 className="text-micro font-semibold uppercase tracking-wide text-text-muted">
            {t('result.resourceLabel')}
          </h3>
          <p className="mt-2xs text-base text-text">{t(`resources.${reading.resourceKey}`)}</p>
        </div>
      ) : null}

      {reading.suggestedProductSlug ? (
        <div className="mt-lg">
          <h3 className="text-micro font-semibold uppercase tracking-wide text-text-muted">
            {t('result.productLabel')}
          </h3>
          <Link
            href={`/credits/${reading.suggestedProductSlug}`}
            className="mt-2xs inline-flex items-center gap-2xs text-base font-medium text-brand hover:underline"
          >
            {t('result.productLink')}
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : null}

      <p className="mt-lg text-micro leading-relaxed text-text-muted">{t('result.note')}</p>

      <div className="mt-lg flex flex-col gap-sm sm:flex-row">
        {reading.state !== 'stop' ? (
          <Link href="/demande" className={buttonVariants({ variant: 'accent', size: 'md' })}>
            {t('result.ctaRequest')}
            <IconArrowRight className="h-4 w-4" />
          </Link>
        ) : null}
        <Link href="/simulateur" className={buttonVariants({ variant: 'outline', size: 'md' })}>
          {t('result.ctaSimulate')}
        </Link>
        <Button variant="ghost" size="md" onClick={onRestart}>
          {t('result.ctaRestart')}
        </Button>
      </div>
    </div>
  );
}
