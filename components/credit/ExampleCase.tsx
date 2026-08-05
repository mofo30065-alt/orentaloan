import { useTranslations } from 'next-intl';

interface Case {
  title: string;
  detail: string;
}

export function ExampleCase({ slug }: { slug: string }) {
  const t = useTranslations('credits');
  const example = t.raw(`products.${slug}.case`) as Case;

  return (
    <div className="rounded-lg border border-brand/20 bg-brand/5 p-lg">
      <h3 className="text-h3 text-brand">{example.title}</h3>
      <p className="mt-2xs text-base text-text">{example.detail}</p>
    </div>
  );
}
