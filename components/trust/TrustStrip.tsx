import { useTranslations } from 'next-intl';
import { IconShieldCheck, IconAddress } from '@/components/common/icons';

/**
 * Preuve de légitimité de premier rang (agrément, adresse joignable).
 * Sur ce marché, la transparence est l'argument commercial — traitée comme le hero.
 */
export function TrustStrip() {
  const t = useTranslations('common.trust');

  const items = [
    { icon: IconShieldCheck, label: t('licensed', { agrement: t('licensedPlaceholder') }) },
    { icon: IconAddress, label: t('address') },
  ];

  return (
    <ul className="flex flex-col gap-sm sm:flex-row sm:flex-wrap sm:gap-lg">
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-xs text-small font-medium text-text">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-pill bg-brand/10 text-brand">
            <Icon className="h-[18px] w-[18px]" />
          </span>
          {label}
        </li>
      ))}
    </ul>
  );
}
