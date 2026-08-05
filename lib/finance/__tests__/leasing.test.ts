import { describe, it, expect } from 'vitest';
import { computeLeasing } from '../leasing';
import { monthlyPaymentCents } from '../monthlyPayment';
import { toCents } from '../rounding';

describe('computeLeasing', () => {
  it('valeur résiduelle nulle : le loyer équivaut à une mensualité amortissable', () => {
    const lease = computeLeasing({
      assetValue: 25000,
      residualValue: 0,
      annualRate: 0.045,
      termMonths: 48,
    });
    expect(lease.monthlyRentCents).toBe(monthlyPaymentCents(toCents(25000), 0.045, 48));
  });

  it('respecte l’identité financé = PV(loyers) + PV(résiduelle)', () => {
    const residualValue = 9000;
    const annualRate = 0.045;
    const termMonths = 48;
    const lease = computeLeasing({ assetValue: 30000, residualValue, annualRate, termMonths });

    const monthlyRate = annualRate / 12;
    const annuityFactor = (1 - Math.pow(1 + monthlyRate, -termMonths)) / monthlyRate;
    const reconstructed =
      lease.monthlyRentCents * annuityFactor +
      toCents(residualValue) / Math.pow(1 + monthlyRate, termMonths);

    // Écart borné par l'arrondi du loyer au centime.
    expect(Math.abs(reconstructed - lease.financedCents)).toBeLessThan(50);
  });

  it('intègre l’apport dans le montant financé', () => {
    const lease = computeLeasing({
      assetValue: 30000,
      downPayment: 5000,
      residualValue: 9000,
      annualRate: 0.045,
      termMonths: 48,
    });
    expect(lease.financedCents).toBe(toCents(25000));
    expect(lease.totalWithPurchaseCents).toBe(
      toCents(5000) + lease.totalRentsCents + toCents(9000),
    );
  });
});
