import { describe, it, expect } from 'vitest';
import { computeMonthlyPayment, monthlyPaymentCents } from '../monthlyPayment';
import { toCents } from '../rounding';

describe('monthlyPaymentCents', () => {
  it('référence hypothécaire : 200 000 € à 6 % sur 360 mois = 1 199,10 €', () => {
    expect(monthlyPaymentCents(toCents(200000), 0.06, 360)).toBe(119910);
  });

  it('taux nul : mensualité = capital / durée', () => {
    expect(monthlyPaymentCents(toCents(12000), 0, 12)).toBe(toCents(1000));
  });

  it('computeMonthlyPayment accepte des euros', () => {
    expect(computeMonthlyPayment({ principal: 200000, annualRate: 0.06, termMonths: 360 })).toBe(
      119910,
    );
  });

  it('rejette une durée invalide', () => {
    expect(() => monthlyPaymentCents(toCents(1000), 0.05, 0)).toThrow(RangeError);
    expect(() => monthlyPaymentCents(toCents(1000), 0.05, 12.5)).toThrow(RangeError);
  });

  it('rejette un taux négatif', () => {
    expect(() => monthlyPaymentCents(toCents(1000), -0.01, 12)).toThrow(RangeError);
  });
});
