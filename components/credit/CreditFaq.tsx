import { useTranslations } from 'next-intl';
import { IconChevronDown } from '@/components/common/icons';

interface QA {
  q: string;
  a: string;
}

/** FAQ en accordéon accessible sans JS (élément <details>). */
export function CreditFaq({ slug }: { slug: string }) {
  const t = useTranslations('credits');
  const items = t.raw(`products.${slug}.faq`) as QA[];

  return (
    <div className="divide-y divide-border rounded-lg border border-border">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-md p-lg text-base font-medium text-text [&::-webkit-details-marker]:hidden">
            {item.q}
            <IconChevronDown className="h-5 w-5 shrink-0 text-text-muted transition-transform group-open:rotate-180" />
          </summary>
          <p className="px-lg pb-lg text-base text-text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
