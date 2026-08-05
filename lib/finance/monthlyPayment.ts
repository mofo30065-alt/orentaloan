import type { AmortizingLoanInput } from './types';
import { roundCents, toCents } from './rounding';
import { ensureNonNegative, ensureNonNegativeRate, ensurePositiveInteger } from './guards';

/**
 * Mensualité constante d'un prêt amortissable à taux fixe.
 * M = C · i / (1 − (1 + i)^−n), avec i = taux mensuel ; cas i = 0 : M = C / n.
 */
export function monthlyPaymentCents(
  principalCents: number,
  annualRate: number,
  termMonths: number,
): number {
  ensureNonNegative(principalCents, 'principalCents');
  ensureNonNegativeRate(annualRate);
  ensurePositiveInteger(termMonths, 'termMonths');

  const i = annualRate / 12;
  if (i === 0) {
    return roundCents(principalCents / termMonths);
  }
  const factor = i / (1 - Math.pow(1 + i, -termMonths));
  return roundCents(principalCents * factor);
}

export function computeMonthlyPayment(input: AmortizingLoanInput): number {
  return monthlyPaymentCents(toCents(input.principal), input.annualRate, input.termMonths);
}
