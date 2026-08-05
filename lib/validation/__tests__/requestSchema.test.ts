import { describe, it, expect } from 'vitest';
import { buildRequestSchema } from '../requestSchema';

const t = (key: string) => key;
const schema = buildRequestSchema(t);

const valid = {
  projectType: 'rachat',
  amount: 80000,
  durationMonths: 180,
  maritalStatus: 'marie',
  dependents: 2,
  housingStatus: 'proprietaireAvecCredit',
  monthlyIncome: 3200,
  monthlyCharges: 1400,
  employmentStatus: 'cdi',
  seniority: 'plus3ans',
  incident: 'non',
  firstName: 'Marie',
  lastName: 'Durand',
  email: 'marie.durand@example.com',
  phone: '0601020304',
  postalCode: '75011',
  city: 'Paris',
  consent: true,
  website: '',
};

describe('buildRequestSchema', () => {
  it('accepte une demande complète valide', () => {
    expect(schema.safeParse(valid).success).toBe(true);
  });

  it('refuse sans consentement RGPD', () => {
    expect(schema.safeParse({ ...valid, consent: false }).success).toBe(false);
  });

  it('refuse un e-mail invalide', () => {
    expect(schema.safeParse({ ...valid, email: 'nope' }).success).toBe(false);
  });

  it('refuse un montant hors bornes', () => {
    expect(schema.safeParse({ ...valid, amount: 100 }).success).toBe(false);
  });

  it('refuse un honeypot rempli', () => {
    expect(schema.safeParse({ ...valid, website: 'http://spam' }).success).toBe(false);
  });

  it('refuse un type de projet inconnu', () => {
    expect(schema.safeParse({ ...valid, projectType: 'yacht' }).success).toBe(false);
  });
});
