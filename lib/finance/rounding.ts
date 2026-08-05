/**
 * Stratégie d'arrondi monétaire (voir CLAUDE.md §5).
 * On travaille en centimes entiers. Les intérêts d'une période produisent des centimes
 * fractionnaires que l'on arrondit au centime le plus proche, demi vers le haut
 * (arrondi commercial). Le résidu cumulé est absorbé par la dernière échéance.
 */

/** Euros -> centimes entiers. */
export function toCents(euros: number): number {
  return Math.round(euros * 100);
}

/** Centimes entiers -> euros (nombre). Le formatage localisé se fait dans lib/format. */
export function fromCents(cents: number): number {
  return cents / 100;
}

/** Arrondit un montant en centimes fractionnaires au centime entier (demi vers le haut). */
export function roundCents(fractionalCents: number): number {
  return Math.round(fractionalCents);
}
