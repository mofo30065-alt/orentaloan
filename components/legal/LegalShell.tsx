import type { ReactNode } from 'react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';

export function LegalShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-prose">
          <h1 className="text-h1">{title}</h1>
          {intro ? <p className="mt-md text-base text-text-muted">{intro}</p> : null}
          <div className="mt-xl space-y-lg">{children}</div>
        </div>
      </Container>
    </Section>
  );
}
