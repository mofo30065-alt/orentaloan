import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

/**
 * Logo « Spark loan » : marque dessinée (éclair « spark » sur pastille violette + point
 * d'accent) + mot-plein en titrage. Couleurs de marque figées (asset), hex admis ici.
 */
export function Logo({ className }: { className?: string }) {
  const t = useTranslations('common');
  return (
    <span
      className={cn(
        'inline-flex items-center gap-xs font-display text-h3 font-semibold leading-none tracking-tight text-text',
        className,
      )}
    >
      <svg viewBox="0 0 24 24" aria-hidden className="h-7 w-7 shrink-0">
        <rect width="24" height="24" rx="5.5" fill="#4B2E93" />
        <path d="M13 3 L6 13 H10.5 L9.5 21 L17 10 H12.5 Z" fill="#FCFBFE" />
        <circle cx="18.4" cy="18.4" r="2" fill="#9B7BFF" />
      </svg>
      <span>{t('brand.name')}</span>
    </span>
  );
}
