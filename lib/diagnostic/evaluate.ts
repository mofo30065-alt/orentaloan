import type { DiagnosticAnswers, ProjectType, Reading } from './types';

/**
 * Seuils de taux d'endettement (charges + crédits en cours / revenus).
 * Volontairement explicites et discutables : ce sont des repères d'orientation,
 * pas un barème d'octroi.
 */
const DEBT_RATIO_TIGHT = 0.45;
const DEBT_RATIO_HEAVY = 0.6;

const PRODUCT_BY_PROJECT: Record<ProjectType, string> = {
  rachat: 'rachat-credit',
  tresorerie: 'pret-tresorerie',
  immobilier: 'pret-immobilier',
  travaux: 'pret-travaux',
  auto: 'pret-auto',
  consommation: 'credit-consommation',
  professionnel: 'pret-tresorerie',
};

/**
 * Transforme des réponses en une Lecture honnête.
 * L'état « stop » existe réellement et s'affiche : un dossier voué au refus est orienté
 * vers une ressource utile plutôt que poussé vers un formulaire.
 */
export function evaluateDiagnostic(answers: DiagnosticAnswers): Reading {
  const {
    project,
    employment,
    seniority,
    monthlyIncome,
    monthlyCharges,
    ownership,
    incident,
  } = answers;

  const isOwner =
    ownership === 'proprietaireSansCredit' || ownership === 'proprietaireAvecCredit';
  const filed = incident === 'oui';
  const filingUnknown = incident === 'inconnu';
  const debtRatio = monthlyIncome > 0 ? monthlyCharges / monthlyIncome : Number.POSITIVE_INFINITY;
  const suggestedProductSlug = PRODUCT_BY_PROJECT[project];

  // Aucune capacité de remboursement mesurable.
  if (monthlyIncome <= 0) {
    return {
      state: 'stop',
      reasonKey: 'insufficientCapacity',
      leverKeys: ['coBorrower', 'reduceCharges'],
      resourceKey: 'debtCounseling',
    };
  }

  // Sans emploi ni revenu de remplacement : le financement suppose une garantie réelle.
  if (employment === 'sansEmploi') {
    return isOwner
      ? {
          state: 'work',
          reasonKey: 'unemployedOwner',
          leverKeys: ['propertyAppraisal', 'coBorrower'],
          suggestedProductSlug: 'rachat-credit',
        }
      : {
          state: 'stop',
          reasonKey: 'unemployedNoAsset',
          leverKeys: ['coBorrower'],
          resourceKey: 'debtCounseling',
        };
  }

  // Incident de paiement déclaré (FICP / FCC).
  if (filed) {
    return isOwner
      ? {
          state: 'work',
          reasonKey: 'filedWithProperty',
          leverKeys: ['propertyAppraisal', 'consolidate'],
          suggestedProductSlug: 'rachat-credit',
        }
      : {
          state: 'stop',
          reasonKey: 'filedNoCollateral',
          leverKeys: ['waitDelisting'],
          resourceKey: 'mediationBanqueDeFrance',
        };
  }

  // Capacité de remboursement très tendue.
  if (debtRatio >= DEBT_RATIO_HEAVY) {
    return isOwner
      ? {
          state: 'work',
          reasonKey: 'highDebtRatioOwner',
          leverKeys: ['consolidate', 'propertyAppraisal'],
          suggestedProductSlug: 'rachat-credit',
        }
      : {
          state: 'stop',
          reasonKey: 'insufficientCapacity',
          leverKeys: ['consolidate', 'reduceCharges'],
          resourceKey: 'debtCounseling',
        };
  }

  // Capacité tendue mais pas bloquante.
  if (debtRatio >= DEBT_RATIO_TIGHT) {
    return {
      state: 'work',
      reasonKey: 'tightCapacity',
      leverKeys: ['consolidate', 'addDownPayment', 'reduceCharges'],
      suggestedProductSlug,
    };
  }

  // À ce stade la capacité est saine et il n'y a pas d'incident déclaré.
  const baseLevers: string[] = [];
  let reasonKey = 'healthyStable';

  if (employment === 'independant') {
    if (seniority === 'plus3ans') {
      reasonKey = 'healthyIndependant';
    } else {
      return {
        state: 'work',
        reasonKey: 'youngIndependant',
        leverKeys: ['provideBilans', 'gainSeniority', 'addDownPayment'],
        suggestedProductSlug,
      };
    }
  } else if (employment === 'cdd') {
    return {
      state: 'work',
      reasonKey: 'shortContract',
      leverKeys: ['coBorrower', 'addDownPayment', 'gainSeniority'],
      suggestedProductSlug,
    };
  } else if (seniority === 'moins1an') {
    return {
      state: 'work',
      reasonKey: 'shortSeniority',
      leverKeys: ['gainSeniority', 'addDownPayment'],
      suggestedProductSlug,
    };
  }

  // Situation favorable. Un doute sur le fichage la nuance sans la bloquer.
  if (filingUnknown) {
    return {
      state: 'work',
      reasonKey: 'checkFiling',
      leverKeys: ['verifyFiling'],
      suggestedProductSlug,
    };
  }

  return {
    state: 'go',
    reasonKey,
    leverKeys: baseLevers,
    suggestedProductSlug,
  };
}
