/** Garde-fous d'entrée. Un moteur financier échoue bruyamment plutôt que de produire un chiffre faux. */

export function ensurePositiveInteger(value: number, name: string): void {
  if (!Number.isInteger(value) || value <= 0) {
    throw new RangeError(`${name} doit être un entier strictement positif (reçu : ${value}).`);
  }
}

export function ensureNonNegative(value: number, name: string): void {
  if (!Number.isFinite(value) || value < 0) {
    throw new RangeError(`${name} doit être un nombre positif ou nul (reçu : ${value}).`);
  }
}

export function ensureNonNegativeRate(rate: number): void {
  if (!Number.isFinite(rate) || rate < 0) {
    throw new RangeError(`Le taux annuel doit être positif ou nul (reçu : ${rate}).`);
  }
}
