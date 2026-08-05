import type { CountryLegal } from './types';

export const pl: CountryLegal = {
  code: 'PL',
  locale: 'pl',
  lender: {
    name: 'Spark Finance Polska S.A.',
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
  dpo: { name: 'Inspektor ochrony danych — Spark Finance Polska', email: 'iod@sparkloan.pl' },
  contact: { phone: '+48221234567', email: 'kontakt@sparkloan.pl', whatsapp: '+48512345678' },
  agencies: [
    { name: 'Oddział Warszawa', address: 'ul. Marszałkowska 100, 00-026 Warszawa', hours: 'Pon – Pt, 9:00 – 18:00' },
  ],
  bookingUrl: 'https://rezerwacja.sparkloan.pl',
};
