import { useTranslations } from 'next-intl';
import { IconClock, IconNoFee, IconRoute, IconScale } from '@/components/common/icons';

const ICONS = [IconScale, IconRoute, IconClock, IconNoFee];

interface Advantage {
  title: string;
  desc: string;
}

export function Advantages() {
  const t = useTranslations('home.advantages');
  const items = t.raw('items') as Advantage[];

  return (
    <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const Icon = ICONS[index] ?? IconScale;
        return (
          <div key={item.title} className="rounded-lg border border-border bg-surface p-lg">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand/10 text-brand">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-md text-h3">{item.title}</h3>
            <p className="mt-2xs text-small text-text-muted">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
