import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

/**
 * Marque « Spark loan » : mot-plein en titrage + point d’accent violet.
 * Logo textuel chartré, en attendant un éventuel logo dessiné.
 */
export function Logo({ className }: { className?: string }) {
  const t = useTranslations('common');
  return (
    <span
      className={cn('font-display text-h3 font-semibold leading-none tracking-tight text-text', className)}
    >
      {t('brand.name')}
      <span className="text-accent">.</span>
    </span>
  );
}
