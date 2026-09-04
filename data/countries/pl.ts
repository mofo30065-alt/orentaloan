import type { CountryLegal } from './types';

export const pl: CountryLegal = {
  code: 'PL',
  locale: 'pl',
  lender: {
    name: 'OrentaLoan Polska S.A.',
    legalForm: 'Spółka akcyjna',
    capital: '5 000 000 zł',
    registration: 'KRS 0001234567, REGON 123456789',
    regulator: 'KNF — Komisja Nadzoru Finansowego',
    regulatoryNumber: 'KNF nr RIP 12345',
    vat: 'PL1234567890',
  },
  publicationDirector: 'Anna Kowalska',
  host: { name: 'OVHcloud', address: '2 rue Kellermann, 59100 Roubaix, Francja' },
  mediator: { name: 'Rzecznik Finansowy', url: 'https://rf.gov.pl' },
  coolingOffDays: 14,
  dpo: { name: 'Inspektor ochrony danych — OrentaLoan Polska', email: 'iod@orentaloan.pl' },
  contact: { phone: '+447737143454', email: 'kontakt@orentaloan.pl', whatsapp: '+447737143454' },
  agencies: [
    { name: 'Oddział Warszawa', address: 'ul. Marszałkowska 100, 00-026 Warszawa', hours: 'Pon – Pt, 9:00 – 18:00' },
  ],
  bookingUrl: 'https://rezerwacja.orentaloan.pl',
};
