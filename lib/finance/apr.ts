import type { AprInput } from './types';
import { toCents } from './rounding';
import { monthlyPaymentCents } from './monthlyPayment';
import { ensureNonNegative, ensureNonNegativeRate, ensurePositiveInteger } from './guards';

/**
 * TAEG indicatif (taux annuel effectif global).
 * Résout l'équation actuarielle de la directive européenne 2008/48 : le taux annuel `y`
 * qui égalise la valeur actuelle des flux de l'emprunteur.
 *
 *   principal − frais = Σ_{k=1}^{n} (mensualité + assurance) / (1 + y)^(k/12)
 *
 * `f(y)` est strictement décroissante en `y` : résolution par dichotomie (robuste et
 * convergente), tolérance sous le centime. Retourne une fraction décimale (0.0721 = 7,21 %).
 */
export function computeApr(input: AprInput): number {
  ensureNonNegative(input.principal, 'principal');
  ensureNonNegativeRate(input.annualRate);
  ensurePositiveInteger(input.termMonths, 'termMonths');
  ensureNonNegative(input.arrangementFees ?? 0, 'arrangementFees');
  ensureNonNegative(input.monthlyInsurance ?? 0, 'monthlyInsurance');

  const principalCents = toCents(input.principal);
  const feesCents = toCents(input.arrangementFees ?? 0);
  const insuranceCents = toCents(input.monthlyInsurance ?? 0);
  const n = input.termMonths;
  const monthly = monthlyPaymentCents(principalCents, input.annualRate, n) + insuranceCents;
  const netPrincipal = principalCents - feesCents;

  const f = (y: number): number => {
    let pv = 0;
    for (let k = 1; k <= n; k += 1) {
      pv += monthly / Math.pow(1 + y, k / 12);
    }
    return pv - netPrincipal;
  };

  // Aucun coût mesurable -> TAEG nul.
  if (f(0) <= 0) {
    return 0;
  }

  // Encadre la racine : f(low) > 0, on pousse `high` jusqu'à f(high) < 0.
  let low = 0;
  let high = 4; // 400 % : borne large
  let guard = 0;
  while (f(high) > 0 && guard < 100) {
    high *= 2;
    guard += 1;
  }

  for (let iteration = 0; iteration < 200; iteration += 1) {
    const mid = (low + high) / 2;
    const value = f(mid);
    if (Math.abs(value) < 1e-7) {
      return mid;
    }
    if (value > 0) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return (low + high) / 2;
}
