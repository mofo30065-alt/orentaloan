import { describe, it, expect } from 'vitest';
import { computeBridge } from '../bridge';
import { roundCents, toCents } from '../rounding';

describe('computeBridge', () => {
  const amount = 150000;
  const annualRate = 0.045;
  const termMonths = 12;

  it('franchise partielle : intérêts mensuels, capital in fine', () => {
    const bridge = computeBridge({ amount, annualRate, termMonths, mode: 'interest-only' });
    const expectedMonthly = roundCents(toCents(amount) * (annualRate / 12));
    expect(bridge.monthlyPaymentCents).toBe(expectedMonthly);
    expect(bridge.balloonPaymentCents).toBe(toCents(amount));
    expect(bridge.totalInterestCents).toBe(expectedMonthly * termMonths);
  });

  it('franchise totale : aucun paiement mensuel, capital + intérêts in fine', () => {
    const bridge = computeBridge({ amount, annualRate, termMonths, mode: 'deferred' });
    const expectedInterest = roundCents(toCents(amount) * (annualRate / 12) * termMonths);
    expect(bridge.monthlyPaymentCents).toBe(0);
    expect(bridge.totalInterestCents).toBe(expectedInterest);
    expect(bridge.balloonPaymentCents).toBe(toCents(amount) + expectedInterest);
  });
});
