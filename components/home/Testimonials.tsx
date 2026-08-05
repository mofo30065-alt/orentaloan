import { useTranslations } from 'next-intl';
import { IconStar } from '@/components/common/icons';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export function Testimonials() {
  const t = useTranslations('home.testimonials');
  const items = t.raw('items') as Testimonial[];
  const loopItems = [...items, ...items];

  return (
    <div className="overflow-hidden" aria-label={t('eyebrow')}>
      <div className="animate-marquee flex items-stretch gap-md">
        {loopItems.map((item, index) => (
          <figure
            key={`${item.name}-${index}`}
            className="flex w-[20rem] flex-shrink-0 flex-col sm:w-[24rem] rounded-lg border border-border bg-surface p-xl"
          >
            <div className="flex gap-2xs" aria-label={`${item.rating} / 5`}>
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <IconStar
                  key={starIndex}
                  className={cn('h-4 w-4', starIndex < item.rating ? 'text-accent' : 'text-brume')}
                />
              ))}
            </div>
            <blockquote className="mt-md flex-1 text-base text-text">« {item.quote} »</blockquote>
            <figcaption className="mt-md text-small text-text-muted">
              <span className="font-medium text-text">{item.name}</span> — {item.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
