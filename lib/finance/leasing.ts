import type { LeasingInput, LeasingResult } from './types';
import { roundCents, toCents } from './rounding';
import { ensureNonNegative, ensureNonNegativeRate, ensurePositiveInteger } from './guards';

/**
 * LOA / leasing : modèle distinct de l'amortissable.
 * Le loyer amortit (valeur financée − valeur résiduelle actualisée), la valeur résiduelle
 * étant l'option d'achat payable en fin de contrat, pas remboursée dans les loyers.
 *
 *   financé = loyer · (1 − (1+i)^−n)/i + résiduelle / (1+i)^n
 */
export function computeLeasing(input: LeasingInput): LeasingResult {
  ensureNonNegative(input.assetValue, 'assetValue');
  ensureNonNegative(input.downPayment ?? 0, 'downPayment');
  ensureNonNegative(input.residualValue, 'residualValue');
  ensureNonNegativeRate(input.annualRate);
  ensurePositiveInteger(input.termMonths, 'termMonths');

  const assetCents = toCents(input.assetValue);
  const downCents = toCents(input.downPayment ?? 0);
  const residualCents = toCents(input.residualValue);
  const financed = assetCents - downCents;
  const i = input.annualRate / 12;
  const n = input.termMonths;

  let rent: number;
  if (i === 0) {
    rent = roundCents((financed - residualCents) / n);
  } else {
    const annuityFactor = (1 - Math.pow(1 + i, -n)) / i;
    const presentValueResidual = residualCents / Math.pow(1 + i, n);
    rent = roundCents((financed - presentValueResidual) / annuityFactor);
  }

  const totalRents = rent * n;
  const totalWithPurchase = downCents + totalRents + residualCents;

  return {
    financedCents: financed,
    monthlyRentCents: rent,
    residualValueCents: residualCents,
    totalRentsCents: totalRents,
    totalWithPurchaseCents: totalWithPurchase,
  };
}
