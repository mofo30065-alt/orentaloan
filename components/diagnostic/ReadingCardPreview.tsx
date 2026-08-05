import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { buttonVariants } from '@/components/ui/Button';
import { IconArrowRight } from '@/components/common/icons';
import { cn } from '@/lib/utils';

/**
 * Aperçu statique de l'élément signature « La Lecture ».
 * Le composant interactif complet est construit en phase 3.
 * Les trois états sont volontairement calmes — l'état « stop » n'est jamais rouge.
 */
const STATES = [
  { key: 'go', dot: 'bg-state-go' },
  { key: 'work', dot: 'bg-state-work' },
  { key: 'stop', dot: 'bg-state-stop' },
] as const;

export function ReadingCardPreview() {
  const t = useTranslations('home.signature');

  return (
    <div className="rounded-lg border border-border bg-surface p-lg shadow-lift">
      <p className="text-micro font-semibold uppercase tracking-wide text-text-muted">
        {t('eyebrow')}
      </p>
      <h3 className="mt-2xs text-h2">{t('title')}</h3>

      <ul className="mt-md space-y-sm">
        {STATES.map((state) => (
          <li key={state.key} className="flex gap-sm rounded-md border border-border bg-bg p-sm">
            <span className={cn('mt-[6px] h-[10px] w-[10px] shrink-0 rounded-pill', state.dot)} />
            <div>
              <p className="text-small font-semibold text-text">{t(`states.${state.key}.label`)}</p>
              <p className="mt-2xs text-small text-text-muted">{t(`states.${state.key}.desc`)}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-md text-micro leading-relaxed text-text-muted">{t('note')}</p>

      <Link
        href="/pre-diagnostic"
        className={cn(buttonVariants({ variant: 'brand', size: 'md' }), 'mt-md w-full')}
      >
        {t('cta')}
        <IconArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
