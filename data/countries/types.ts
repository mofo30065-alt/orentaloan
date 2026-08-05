/**
 * Cadre réglementaire et identité du prêteur, structurés **par pays** (voir CLAUDE.md §1).
 * La locale n'affiche que les données de son pays (fr → France uniquement).
 * Données de démonstration : à remplacer par les informations réelles avant mise en ligne.
 */
export interface Agency {
  name: string;
  address: string;
  hours: string;
}

export interface CountryLegal {
  code: string;
  locale: string;
  lender: {
    name: string;
    legalForm: string;
    capital: string;
    registration: string;
    regulator: string;
    regulatoryNumber: string;
    vat: string;
  };
  publicationDirector: string;
  host: { name: string; address: string };
  mediator: { name: string; url: string };
  /** Droit de rétractation, en jours (14 pour le crédit à la consommation en zone euro). */
  coolingOffDays: number;
  dpo: { name: string; email: string };
  contact: { phone: string; email: string; whatsapp: string };
  agencies: Agency[];
  bookingUrl: string;
}
