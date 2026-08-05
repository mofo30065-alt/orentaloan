import type { AmortizationResult, AmortizingLoanInput, Installment } from './types';
import { roundCents, toCents } from './rounding';
import { monthlyPaymentCents } from './monthlyPayment';
import { ensureNonNegative, ensureNonNegativeRate, ensurePositiveInteger } from './guards';

/**
 * Tableau d'amortissement complet, échéance par échéance.
 * Les intérêts sont calculés sur le capital restant dû, arrondis au centime.
 * La dernière échéance solde exactement le capital (absorbe le résidu d'arrondi),
 * si bien que le solde final est toujours 0.
 */
export function buildAmortization(input: AmortizingLoanInput): AmortizationResult {
  ensureNonNegative(input.principal, 'principal');
  ensureNonNegativeRate(input.annualRate);
  ensurePositiveInteger(input.termMonths, 'termMonths');

  const principalCents = toCents(input.principal);
  const i = input.annualRate / 12;
  const n = input.termMonths;
  const monthly = monthlyPaymentCents(principalCents, input.annualRate, n);

  const schedule: Installment[] = [];
  let balance = principalCents;
  let totalInterest = 0;
  let totalPaid = 0;

  for (let period = 1; period <= n; period += 1) {
    const interest = i === 0 ? 0 : roundCents(balance * i);
    let principalPart = monthly - interest;
    let payment = monthly;

    if (period === n) {
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
    principalCents,
    monthlyPaymentCents: monthly,
    schedule,
    totalInterestCents: totalInterest,
    totalPaidCents: totalPaid,
  };
}
