import { z } from 'zod';

/**
 * Schéma de la demande de financement. Construit avec un traducteur pour que les
 * messages d'erreur restent dans les fichiers i18n (aucun texte en dur ici).
 * Fonction pure : testable en passant un `t` factice.
 */
export type Translator = (key: string, values?: Record<string, string | number>) => string;

export const PROJECT_TYPES = [
  'rachat',
  'tresorerie',
  'immobilier',
  'travaux',
  'auto',
  'consommation',
  'professionnel',
] as const;
export const MARITAL = ['celibataire', 'marie', 'pacse', 'divorce', 'veuf'] as const;
export const HOUSING = [
  'proprietaireSansCredit',
  'proprietaireAvecCredit',
  'locataire',
  'heberge',
] as const;
export const EMPLOYMENT = ['cdi', 'cdd', 'independant', 'retraite', 'sansEmploi'] as const;
export const SENIORITY = ['moins1an', '1a3ans', 'plus3ans'] as const;
export const INCIDENT = ['oui', 'non', 'inconnu'] as const;

/** Un champ nombre vide passe par valueAsNumber en NaN : on le ramène à undefined. */
const cleanNaN = (value: unknown): unknown =>
  typeof value === 'number' && Number.isNaN(value) ? undefined : value;

export function buildRequestSchema(t: Translator) {
  const required = t('errors.required');
  const enumParams = { errorMap: () => ({ message: required }) };

  return z.object({
    // Étape 1
    projectType: z.enum(PROJECT_TYPES, enumParams),
    amount: z.preprocess(
      cleanNaN,
      z
        .number({ required_error: required, invalid_type_error: required })
        .int()
        .min(500, t('errors.amountMin', { min: 500 }))
        .max(2000000, t('errors.amountMax', { max: 2000000 })),
    ),
    durationMonths: z.preprocess(
      cleanNaN,
      z
        .number({ required_error: required, invalid_type_error: required })
        .int()
        .min(6, t('errors.durationMin', { min: 6 }))
        .max(420, t('errors.durationMax', { max: 420 })),
    ),

    // Étape 2
    maritalStatus: z.enum(MARITAL, enumParams),
    dependents: z.preprocess(
      cleanNaN,
      z
        .number({ required_error: required, invalid_type_error: required })
        .int()
        .min(0, t('errors.positive'))
        .max(20),
    ),
    housingStatus: z.enum(HOUSING, enumParams),
    monthlyIncome: z.preprocess(
      cleanNaN,
      z
        .number({ required_error: required, invalid_type_error: required })
        .min(0, t('errors.positive'))
        .max(1000000),
    ),
    monthlyCharges: z.preprocess(
      cleanNaN,
      z
        .number({ required_error: required, invalid_type_error: required })
        .min(0, t('errors.positive'))
        .max(1000000),
    ),

    // Étape 3
    employmentStatus: z.enum(EMPLOYMENT, enumParams),
    seniority: z.enum(SENIORITY, enumParams),
    profession: z.string().max(80).optional(),
    incident: z.enum(INCIDENT, enumParams),

    // Étape 4
    firstName: z.string().min(2, t('errors.name')),
    lastName: z.string().min(2, t('errors.name')),
    email: z.string().email(t('errors.email')),
    phone: z.string().min(6, t('errors.phone')),
    postalCode: z.string().min(3, t('errors.postalCode')),
    city: z.string().min(1, required),

    // Étape 5
    consent: z.boolean().refine((value) => value === true, { message: t('errors.consent') }),

    // Anti-spam : champ leurre, doit rester vide.
    website: z.string().max(0).optional(),
  });
}

export type RequestFormValues = z.infer<ReturnType<typeof buildRequestSchema>>;

/** Champs à valider avant de passer à l'étape suivante. */
export const STEP_FIELDS: (keyof RequestFormValues)[][] = [
  ['projectType', 'amount', 'durationMonths'],
  ['maritalStatus', 'dependents', 'housingStatus', 'monthlyIncome', 'monthlyCharges'],
  ['employmentStatus', 'seniority', 'incident'],
  ['firstName', 'lastName', 'email', 'phone', 'postalCode', 'city'],
  ['consent'],
];
