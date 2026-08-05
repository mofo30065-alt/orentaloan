/**
 * Données de crédits (chiffres, langue-neutres). Les textes (nom, description,
 * éligibilité, documents, FAQ, cas) vivent dans messages/<locale>/credits.json,
 * clés par slug. Ajouter un produit = ajouter une donnée + ses libellés, jamais du code.
 */
export type CreditCategory = 'particulier' | 'professionnel';

/** Modèle de calcul : conditionne le simulateur et l'exemple représentatif. */
export type CreditModel = 'amortizing' | 'revolving' | 'leasing' | 'bridge' | 'factoring';

export interface RateTier {
  months: number;
  /** Taux débiteur fixe, en fraction décimale (0.049 = 4,90 %). */
  fixedRate: number;
  /** Taux variable indicatif, en fraction décimale (optionnel). */
  variableRate?: number;
}

export interface SimulatorPreset {
  amount: number;
  months: number;
  ratePct: number;
  amountMin: number;
  amountMax: number;
  amountStep: number;
  monthsMin: number;
  monthsMax: number;
  monthsStep: number;
}

export interface CreditProduct {
  /** URL (/credits/<slug>) et clé i18n (credits.products.<slug>). */
  slug: string;
  category: CreditCategory;
  /** Repose sur une garantie / un actif : porte d'entrée pour un public refusé sur score. */
  featured: boolean;
  model: CreditModel;
  amountMin: number;
  amountMax: number;
  durationMinMonths: number;
  durationMaxMonths: number;
  /** Vide pour les modèles non amortissables : le tableau des taux est alors masqué. */
  rateTable: RateTier[];
  simulator: SimulatorPreset;
}
