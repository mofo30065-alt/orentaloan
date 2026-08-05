/**
 * Types du moteur financier. Toutes les sommes en sortie sont en **centimes entiers**
 * (`*Cents`) pour éviter toute dérive en virgule flottante. La conversion vers l'euro
 * localisé se fait dans lib/format, jamais ici.
 *
 * Convention de taux : `annualRate` est le taux nominal annuel en fraction décimale
 * (0.069 = 6,90 %). Le taux mensuel vaut annualRate / 12.
 */

export interface AmortizingLoanInput {
  /** Capital emprunté, en euros. */
  principal: number;
  /** Taux nominal annuel, en fraction décimale (0.069 = 6,90 %). */
  annualRate: number;
  /** Durée en mois (entier > 0). */
  termMonths: number;
}

export interface Installment {
  /** Numéro d'échéance (1-indexé). */
  period: number;
  paymentCents: number;
  principalCents: number;
  interestCents: number;
  /** Capital restant dû après cette échéance. */
  balanceCents: number;
}

export interface AmortizationResult {
  principalCents: number;
  /** Mensualité constante (la dernière échéance régularise le résidu d'arrondi). */
  monthlyPaymentCents: number;
  schedule: Installment[];
  totalInterestCents: number;
  totalPaidCents: number;
}

export interface AprInput {
  principal: number;
  annualRate: number;
  termMonths: number;
  /** Frais de dossier, en euros, réglés à t=0. */
  arrangementFees?: number;
  /** Prime d'assurance mensuelle, en euros, ajoutée à chaque échéance. */
  monthlyInsurance?: number;
}

export interface RevolvingInput {
  /** Montant utilisé (tiré) sur la réserve, en euros. */
  drawnAmount: number;
  annualRate: number;
  /** Mensualité fixe choisie, en euros. */
  monthlyPayment: number;
  /** Plafond d'itérations de sécurité (défaut 600). */
  maxMonths?: number;
}

export interface RevolvingResult {
  /** `false` si la mensualité ne couvre pas les premiers intérêts (dette qui ne décroît jamais). */
  repayable: boolean;
  months: number;
  schedule: Installment[];
  totalInterestCents: number;
  totalPaidCents: number;
}

export interface LeasingInput {
  /** Valeur du bien financé, en euros. */
  assetValue: number;
  /** Premier loyer majoré / apport, en euros. */
  downPayment?: number;
  /** Valeur résiduelle (option d'achat), en euros. */
  residualValue: number;
  annualRate: number;
  termMonths: number;
}

export interface LeasingResult {
  financedCents: number;
  monthlyRentCents: number;
  residualValueCents: number;
  totalRentsCents: number;
  /** Coût total si l'option d'achat est levée (apport + loyers + valeur résiduelle). */
  totalWithPurchaseCents: number;
}

export type BridgeMode = 'interest-only' | 'deferred';

export interface BridgeInput {
  /** Montant du prêt relais, en euros. */
  amount: number;
  annualRate: number;
  termMonths: number;
  /**
   * `interest-only` : franchise partielle, intérêts payés chaque mois, capital in fine.
   * `deferred` : franchise totale, intérêts simples réglés in fine avec le capital.
   */
  mode: BridgeMode;
}

export interface BridgeResult {
  mode: BridgeMode;
  monthlyPaymentCents: number;
  totalInterestCents: number;
  /** Somme à régler in fine (capital, plus intérêts capitalisés en franchise totale). */
  balloonPaymentCents: number;
  totalCostCents: number;
}
