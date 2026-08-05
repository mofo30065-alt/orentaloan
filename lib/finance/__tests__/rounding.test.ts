import { describe, it, expect } from 'vitest';
import { fromCents, roundCents, toCents } from '../rounding';

describe('rounding', () => {
  it('convertit euros -> centimes entiers', () => {
    expect(toCents(15000)).toBe(1_500_000);
    expect(toCents(1234.56)).toBe(123456);
    expect(toCents(0)).toBe(0);
  });

  it('convertit centimes -> euros', () => {
    expect(fromCents(123456)).toBe(1234.56);
    expect(fromCents(0)).toBe(0);
  });

  it('arrondit au centime le plus proche, demi vers le haut', () => {
    expect(roundCents(100.5)).toBe(101);
    expect(roundCents(100.4)).toBe(100);
    expect(roundCents(99.5)).toBe(100);
    expect(roundCents(0)).toBe(0);
  });

  it('toCents puis fromCents est stable au centime', () => {
    for (const value of [0, 0.01, 9.99, 15000, 249999.99]) {
      expect(fromCents(toCents(value))).toBeCloseTo(value, 2);
    }
  });
});
