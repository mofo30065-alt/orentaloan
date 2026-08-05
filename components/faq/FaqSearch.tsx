'use client';

import { useMemo, useState } from 'react';
import { IconChevronDown } from '@/components/common/icons';

interface QA {
  q: string;
  a: string;
}
interface Category {
  id: string;
  label: string;
  items: QA[];
}

export function FaqSearch({
  categories,
  searchLabel,
  searchPlaceholder,
  empty,
}: {
  categories: Category[];
  searchLabel: string;
  searchPlaceholder: string;
  empty: string;
}) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return categories;
    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.q.toLowerCase().includes(needle) || item.a.toLowerCase().includes(needle),
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [query, categories]);

  return (
    <div>
      <label htmlFor="faq-search" className="sr-only">
        {searchLabel}
      </label>
      <input
        id="faq-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={searchPlaceholder}
        className="min-h-[44px] w-full rounded-md border border-border bg-bg px-md text-base text-text placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      />

      {filtered.length === 0 ? (
        <p className="mt-lg text-base text-text-muted">{empty}</p>
      ) : (
        <div className="mt-lg space-y-xl">
          {filtered.map((category) => (
            <div key={category.id}>
              <h2 className="text-h3">{category.label}</h2>
              <div className="mt-md divide-y divide-border rounded-lg border border-border">
                {category.items.map((item) => (
                  <details key={item.q} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-md p-lg text-base font-medium text-text [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <IconChevronDown className="h-5 w-5 shrink-0 text-text-muted transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="px-lg pb-lg text-base text-text-muted">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
