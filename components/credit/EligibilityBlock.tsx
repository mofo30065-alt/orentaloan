import { useTranslations } from 'next-intl';
import { IconShieldCheck } from '@/components/common/icons';

/** Éligibilité honnête : pour qui c'est accessible, et pour qui ce ne l'est pas. */
export function EligibilityBlock({ slug }: { slug: string }) {
  const t = useTranslations('credits');
  const eligible = t.raw(`products.${slug}.eligible`) as string[];
  const notEligible = t.raw(`products.${slug}.notEligible`) as string[];

  return (
    <div className="grid gap-lg sm:grid-cols-2">
      <div className="rounded-lg border border-border bg-surface p-lg">
        <h3 className="text-h3 text-brand">{t('common.eligibleTitle')}</h3>
        <ul className="mt-md space-y-sm">
          {eligible.map((item) => (
            <li key={item} className="flex items-start gap-sm">
              <IconShieldCheck className="mt-[2px] h-5 w-5 shrink-0 text-brand" />
              <span className="text-base text-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-border bg-surface p-lg">
        <h3 className="text-h3 text-text-muted">{t('common.notEligibleTitle')}</h3>
        <ul className="mt-md space-y-sm">
          {notEligible.map((item) => (
            <li key={item} className="flex items-start gap-sm">
              <span className="mt-[11px] h-[2px] w-3 shrink-0 rounded-pill bg-pierre" />
              <span className="text-base text-text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
