import { describe, it, expect } from 'vitest';
import { computeApr } from '../apr';

describe('computeApr', () => {
  it('sans frais ni assurance : TAEG = annualisation effective du taux nominal', () => {
    const nominal = 0.069;
    const monthly = nominal / 12;
    const expected = Math.pow(1 + monthly, 12) - 1;
    const apr = computeApr({ principal: 15000, annualRate: nominal, termMonths: 48 });
    expect(apr).toBeCloseTo(expected, 5);
  });

  it('les frais de dossier augmentent le TAEG', () => {
    const base = computeApr({ principal: 15000, annualRate: 0.069, termMonths: 48 });
    const withFees = computeApr({
      principal: 15000,
      annualRate: 0.069,
      termMonths: 48,
      arrangementFees: 300,
    });
    expect(withFees).toBeGreaterThan(base);
  });

  it("l'assurance mensuelle augmente le TAEG", () => {
    const base = computeApr({ principal: 15000, annualRate: 0.069, termMonths: 48 });
    const withInsurance = computeApr({
      principal: 15000,
      annualRate: 0.069,
      termMonths: 48,
      monthlyInsurance: 15,
    });
    expect(withInsurance).toBeGreaterThan(base);
  });

  it('taux nominal nul et total sans surcoût : TAEG nul', () => {
    expect(computeApr({ principal: 12000, annualRate: 0, termMonths: 12 })).toBe(0);
  });
});
