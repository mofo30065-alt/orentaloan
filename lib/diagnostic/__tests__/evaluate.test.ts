import { describe, it, expect } from 'vitest';
import { evaluateDiagnostic } from '../evaluate';
import type { DiagnosticAnswers } from '../types';

const base: DiagnosticAnswers = {
  project: 'consommation',
  employment: 'cdi',
  seniority: 'plus3ans',
  monthlyIncome: 2800,
  monthlyCharges: 700,
  ownership: 'locataire',
  incident: 'non',
};

describe('evaluateDiagnostic', () => {
  it('profil sain et stable : piste sérieuse', () => {
    const reading = evaluateDiagnostic(base);
    expect(reading.state).toBe('go');
    expect(reading.suggestedProductSlug).toBeDefined();
  });

  it('sait répondre « non » : fiché sans bien -> non envisageable + ressource', () => {
    const reading = evaluateDiagnostic({ ...base, incident: 'oui', ownership: 'locataire' });
    expect(reading.state).toBe('stop');
    expect(reading.reasonKey).toBe('filedNoCollateral');
    expect(reading.resourceKey).toBeDefined();
  });

  it('fiché mais propriétaire : à consolider, orienté rachat', () => {
    const reading = evaluateDiagnostic({
      ...base,
      incident: 'oui',
      ownership: 'proprietaireAvecCredit',
    });
    expect(reading.state).toBe('work');
    expect(reading.suggestedProductSlug).toBe('rachat-credit');
  });

  it('capacité tendue (50 %) : à consolider', () => {
    const reading = evaluateDiagnostic({ ...base, monthlyIncome: 2000, monthlyCharges: 1000 });
    expect(reading.state).toBe('work');
    expect(reading.reasonKey).toBe('tightCapacity');
  });

  it('capacité trop lourde sans bien : non envisageable', () => {
    const reading = evaluateDiagnostic({ ...base, monthlyIncome: 1800, monthlyCharges: 1200 });
    expect(reading.state).toBe('stop');
  });

  it('sans revenu : non envisageable', () => {
    expect(evaluateDiagnostic({ ...base, monthlyIncome: 0 }).state).toBe('stop');
  });

  it('sans emploi et non propriétaire : non envisageable', () => {
    const reading = evaluateDiagnostic({ ...base, employment: 'sansEmploi', ownership: 'locataire' });
    expect(reading.state).toBe('stop');
  });

  it('CDD par ailleurs sain : à consolider (contrat court)', () => {
    const reading = evaluateDiagnostic({ ...base, employment: 'cdd' });
    expect(reading.state).toBe('work');
    expect(reading.reasonKey).toBe('shortContract');
  });

  it('chaque état non-« go » fournit un levier ou une ressource', () => {
    const reading = evaluateDiagnostic({ ...base, incident: 'oui' });
    expect(reading.leverKeys.length + (reading.resourceKey ? 1 : 0)).toBeGreaterThan(0);
  });
});
