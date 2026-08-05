import { describe, it, expect } from 'vitest';
import { buildAmortization } from '../amortization';
import { toCents } from '../rounding';

describe('buildAmortization', () => {
  const result = buildAmortization({ principal: 15000, annualRate: 0.069, termMonths: 48 });

  it('produit exactement termMonths échéances', () => {
    expect(result.schedule).toHaveLength(48);
  });

  it('solde le capital exactement (dernier solde = 0)', () => {
    expect(result.schedule.at(-1)!.balanceCents).toBe(0);
  });

  it('la somme des parts de capital = capital emprunté', () => {
    const sumPrincipal = result.schedule.reduce((sum, row) => sum + row.principalCents, 0);
    expect(sumPrincipal).toBe(result.principalCents);
    expect(result.principalCents).toBe(toCents(15000));
  });

  it('total payé = capital + total intérêts (cohérence au centime)', () => {
    expect(result.totalPaidCents).toBe(result.principalCents + result.totalInterestCents);
  });

  it('intérêts de la 1re échéance = capital × taux mensuel arrondi', () => {
    expect(result.schedule[0]!.interestCents).toBe(Math.round(toCents(15000) * (0.069 / 12)));
  });

  it('le capital restant dû décroît et reste positif ou nul', () => {
    let previous = result.principalCents;
    for (const row of result.schedule) {
      expect(row.balanceCents).toBeLessThanOrEqual(previous);
      expect(row.balanceCents).toBeGreaterThanOrEqual(0);
      previous = row.balanceCents;
    }
  });

  it('prêt à taux nul : intérêts nuls, capital soldé', () => {
    const zero = buildAmortization({ principal: 12000, annualRate: 0, termMonths: 12 });
    expect(zero.totalInterestCents).toBe(0);
    expect(zero.schedule.at(-1)!.balanceCents).toBe(0);
    expect(zero.totalPaidCents).toBe(toCents(12000));
  });
});
