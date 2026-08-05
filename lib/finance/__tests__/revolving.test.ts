import { describe, it, expect } from 'vitest';
import { simulateRevolving } from '../revolving';
import { toCents } from '../rounding';

describe('simulateRevolving', () => {
  it('rembourse la réserve avec une mensualité suffisante', () => {
    const result = simulateRevolving({ drawnAmount: 3000, annualRate: 0.1958, monthlyPayment: 150 });
    expect(result.repayable).toBe(true);
    expect(result.months).toBeGreaterThan(0);
    expect(result.schedule.at(-1)!.balanceCents).toBe(0);
    expect(result.totalPaidCents).toBe(toCents(3000) + result.totalInterestCents);
  });

  it('signale une mensualité qui ne couvre pas les intérêts (dette qui ne décroît jamais)', () => {
    // 3000 € à 19,58 % : intérêts du 1er mois ≈ 48,95 € > mensualité de 40 €.
    const result = simulateRevolving({ drawnAmount: 3000, annualRate: 0.1958, monthlyPayment: 40 });
    expect(result.repayable).toBe(false);
    expect(result.months).toBe(0);
    expect(result.schedule).toHaveLength(0);
  });
});
