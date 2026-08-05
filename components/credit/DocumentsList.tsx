import { useTranslations } from 'next-intl';

export function DocumentsList({ slug }: { slug: string }) {
  const t = useTranslations('credits');
  const documents = t.raw(`products.${slug}.documents`) as string[];

  return (
    <ul className="grid gap-sm sm:grid-cols-2">
      {documents.map((document) => (
        <li
          key={document}
          className="flex items-start gap-sm rounded-md border border-border bg-surface p-md"
        >
          <span className="mt-[7px] h-2 w-2 shrink-0 rounded-pill bg-accent" />
          <span className="text-base text-text">{document}</span>
        </li>
      ))}
    </ul>
  );
}
