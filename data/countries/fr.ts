import type { CountryLegal } from './types';

export const fr: CountryLegal = {
  code: 'FR',
  locale: 'fr',
  lender: {
    name: 'OrentaLoan SA',
    legalForm: 'Société anonyme',
    capital: '50 000 000 €',
    registration: 'RCS Paris 912 456 789',
    regulator: 'ACPR — Autorité de contrôle prudentiel et de résolution',
    regulatoryNumber: 'ACPR n° 61 234 · ORIAS n° 21 004 567',
    vat: 'FR 42 912456789',
  },
  publicationDirector: 'Camille Lefèvre',
  host: {
    name: 'OVHcloud',
    address: '2 rue Kellermann, 59100 Roubaix, France',
  },
  mediator: {
    name: 'Association Nationale des Médiateurs (ANM)',
    url: 'https://www.anm-conso.com',
  },
  coolingOffDays: 14,
  dpo: {
    name: 'Délégué à la protection des données — OrentaLoan',
    email: 'contact@orentaloan.com',
  },
  contact: {
    phone: '+393501255841',
    email: 'contact@orentaloan.com',
    whatsapp: '+393501255841',
  },
  agencies: [
    {
      name: 'Agence Paris Opéra',
      address: '18 boulevard des Capucines, 75009 Paris',
      hours: 'Lundi – Vendredi, 9h – 18h',
    },
  ],
  bookingUrl: 'https://rdv.orentaloan.fr',
};
