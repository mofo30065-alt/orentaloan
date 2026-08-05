import type { ReactNode } from 'react';

/** Sur-titre chartré : petit point accent violet + libellé en capitales espacées. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-xs text-micro font-semibold uppercase tracking-[0.14em] text-text-muted">
      <span className="h-2 w-2 rounded-pill bg-accent" />
      {children}
    </p>
  );
}
