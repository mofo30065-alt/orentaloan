import type { ReactNode } from 'react';

/**
 * Soulignement d’accent violet signature. Décoratif : n'altère pas le sens pour le lecteur d'écran.
 */
export function Mark({ children }: { children: ReactNode }) {
  return <span className="u-mark">{children}</span>;
}
