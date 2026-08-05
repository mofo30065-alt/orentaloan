/**
 * Types du pré-diagnostic « La Lecture ». Le moteur est pur et testable :
 * il transforme des réponses en une appréciation honnête (go / work / stop),
 * toujours assortie d'un motif et de leviers. Il ne rend jamais une décision de crédit.
 */

export type ProjectType =
  | 'rachat'
  | 'tresorerie'
  | 'immobilier'
  | 'travaux'
  | 'auto'
  | 'consommation'
  | 'professionnel';

export type EmploymentStatus = 'cdi' | 'cdd' | 'independant' | 'retraite' | 'sansEmploi';

export type Seniority = 'moins1an' | '1a3ans' | 'plus3ans';

export type OwnershipStatus =
  | 'proprietaireSansCredit'
  | 'proprietaireAvecCredit'
  | 'locataire'
  | 'heberge';

export type IncidentStatus = 'oui' | 'non' | 'inconnu';

export interface DiagnosticAnswers {
  project: ProjectType;
  employment: EmploymentStatus;
  seniority: Seniority;
  /** Revenus nets mensuels du foyer, en euros. */
  monthlyIncome: number;
  /** Charges et crédits en cours mensuels, en euros. */
  monthlyCharges: number;
  ownership: OwnershipStatus;
  incident: IncidentStatus;
}

export type DiagnosticState = 'go' | 'work' | 'stop';

export interface Reading {
  state: DiagnosticState;
  /** Motif principal (clé i18n dans diagnostic.reasons). */
  reasonKey: string;
  /** Ce qui pourrait changer la réponse (clés i18n dans diagnostic.levers). */
  leverKeys: string[];
  /** Pour l'état « stop » : orientation utile (clé i18n dans diagnostic.resources). */
  resourceKey?: string;
  /** Produit adapté à explorer (slug de page crédit). */
  suggestedProductSlug?: string;
}
