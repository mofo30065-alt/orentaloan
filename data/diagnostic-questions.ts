import type { DiagnosticAnswers } from '@/lib/diagnostic/types';

/**
 * Structure du parcours (données, pas UI). Les libellés vivent dans
 * messages/<locale>/diagnostic.json (questions.<id>, options.<id>.<optionId>).
 */
export type QuestionId = keyof DiagnosticAnswers;

interface SingleQuestion {
  id: 'project' | 'employment' | 'seniority' | 'ownership' | 'incident';
  kind: 'single';
  options: string[];
}

interface NumberQuestion {
  id: 'monthlyIncome' | 'monthlyCharges';
  kind: 'number';
  min: number;
  max: number;
  step: number;
}

export type DiagnosticQuestion = SingleQuestion | NumberQuestion;

export const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: 'project',
    kind: 'single',
    options: ['rachat', 'tresorerie', 'immobilier', 'travaux', 'auto', 'consommation', 'professionnel'],
  },
  { id: 'employment', kind: 'single', options: ['cdi', 'cdd', 'independant', 'retraite', 'sansEmploi'] },
  { id: 'seniority', kind: 'single', options: ['moins1an', '1a3ans', 'plus3ans'] },
  { id: 'monthlyIncome', kind: 'number', min: 0, max: 15000, step: 50 },
  { id: 'monthlyCharges', kind: 'number', min: 0, max: 15000, step: 50 },
  {
    id: 'ownership',
    kind: 'single',
    options: ['proprietaireSansCredit', 'proprietaireAvecCredit', 'locataire', 'heberge'],
  },
  { id: 'incident', kind: 'single', options: ['oui', 'non', 'inconnu'] },
];
