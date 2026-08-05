import type { BridgeInput, BridgeResult } from './types';
import { roundCents, toCents } from './rounding';
import { ensureNonNegative, ensureNonNegativeRate, ensurePositiveInteger } from './guards';

/**
 * Prêt relais : modèle distinct de l'amortissable, le capital n'est pas amorti mais
 * remboursé in fine (à la vente du bien).
 *  - `interest-only` (franchise partielle) : intérêts payés chaque mois, capital in fine.
 *  - `deferred` (franchise totale) : aucun paiement mensuel, intérêts simples réglés in fine.
 */
export function computeBridge(input: BridgeInput): BridgeResult {
  ensureNonNegative(input.amount, 'amount');
  ensureNonNegativeRate(input.annualRate);
  ensurePositiveInteger(input.termMonths, 'termMonths');

  const amountCents = toCents(input.amount);
  const i = input.annualRate / 12;
  const n = input.termMonths;

  if (input.mode === 'interest-only') {
    const monthly = roundCents(amountCents * i);
    const totalInterest = monthly * n;
    return {
      mode: input.mode,
      monthlyPaymentCents: monthly,
      totalInterestCents: totalInterest,
      balloonPaymentCents: amountCents,
      totalCostCents: totalInterest,
    };
  }

  const totalInterest = roundCents(amountCents * i * n);
  return {
    mode: input.mode,
    monthlyPaymentCents: 0,
    totalInterestCents: totalInterest,
    balloonPaymentCents: amountCents + totalInterest,
    totalCostCents: totalInterest,
  };
}
