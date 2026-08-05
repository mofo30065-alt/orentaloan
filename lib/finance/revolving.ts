import type { Installment, RevolvingInput, RevolvingResult } from './types';
import { roundCents, toCents } from './rounding';
import { ensureNonNegative, ensureNonNegativeRate, ensurePositiveInteger } from './guards';

const DEFAULT_MAX_MONTHS = 600;

/**
 * Crédit renouvelable : modèle distinct de l'amortissable (voir CLAUDE.md §8).
 * Réserve tirée, mensualité fixe, intérêts sur le solde. Si la mensualité ne couvre pas
 * les premiers intérêts, la dette ne décroît jamais : on le dit honnêtement (`repayable: false`)
 * plutôt que de boucler à l'infini.
 */
export function simulateRevolving(input: RevolvingInput): RevolvingResult {
  ensureNonNegative(input.drawnAmount, 'drawnAmount');
  ensureNonNegative(input.monthlyPayment, 'monthlyPayment');
  ensureNonNegativeRate(input.annualRate);
  const maxMonths = input.maxMonths ?? DEFAULT_MAX_MONTHS;
  ensurePositiveInteger(maxMonths, 'maxMonths');

  const i = input.annualRate / 12;
  const paymentCents = toCents(input.monthlyPayment);
  let balance = toCents(input.drawnAmount);

  const firstInterest = roundCents(balance * i);
  if (balance > 0 && paymentCents <= firstInterest) {
    return { repayable: false, months: 0, schedule: [], totalInterestCents: 0, totalPaidCents: 0 };
  }

  const schedule: Installment[] = [];
  let totalInterest = 0;
  let totalPaid = 0;
  let period = 0;

  while (balance > 0 && period < maxMonths) {
    period += 1;
    const interest = roundCents(balance * i);
    let principalPart = paymentCents - interest;
    let payment = paymentCents;

    if (principalPart >= balance) {
      principalPart = balance;
      payment = balance + interest;
    }

    balance -= principalPart;
    totalInterest += interest;
    totalPaid += payment;

    schedule.push({
      period,
      paymentCents: payment,
      principalCents: principalPart,
      interestCents: interest,
      balanceCents: balance,
    });
  }

  return {
    repayable: balance <= 0,
    months: schedule.length,
    schedule,
    totalInterestCents: totalInterest,
    totalPaidCents: totalPaid,
  };
}
