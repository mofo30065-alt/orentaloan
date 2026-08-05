import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { buttonVariants } from '@/components/ui/Button';

type SpecialModel = 'revolving' | 'leasing' | 'bridge' | 'factoring';

/**
 * Pour les financements non amortissables (renouvelable, LOA, relais, affacturage) :
 * on n'affiche pas un faux tableau d'amortissement, on explique honnêtement le modèle
 * et on oriente vers le pré-diagnostic ou une demande.
 */
export function SpecialModelNote({ model }: { model: SpecialModel }) {
  const t = useTranslations('credits.common');

  return (
    <div className="rounded-lg border border-border bg-surface p-lg">
      <p className="max-w-prose text-base text-text">{t(`models.${model}`)}</p>
      <div className="mt-lg flex flex-col gap-sm sm:flex-row">
        <Link href="/pre-diagnostic" className={buttonVariants({ variant: 'accent', size: 'md' })}>
          {t('ctaDiagnostic')}
        </Link>
        <Link href="/demande" className={buttonVariants({ variant: 'outline', size: 'md' })}>
          {t('ctaRequest')}
        </Link>
      </div>
    </div>
  );
}
