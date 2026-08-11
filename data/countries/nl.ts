import type { CountryLegal } from './types';

export const nl: CountryLegal = {
  code: 'NL',
  locale: 'nl',
  lender: {
    name: 'Spark Finance Nederland B.V.',
    legalForm: 'Besloten vennootschap (B.V.)',
    capital: '1.000.000 €',
    registration: 'KvK-nummer 87654321',
    regulator: 'AFM — Autoriteit Financiële Markten',
    regulatoryNumber: 'AFM-vergunning 12345678',
    vat: 'NL123456789B01',
  },
  publicationDirector: 'Sanne de Vries',
  host: { name: 'OVHcloud', address: '2 rue Kellermann, 59100 Roubaix, Frankrijk' },
  mediator: { name: 'Kifid — Klachteninstituut Financiële Dienstverlening', url: 'https://www.kifid.nl' },
  coolingOffDays: 14,
  dpo: { name: 'Functionaris gegevensbescherming — Spark Finance Nederland', email: 'privacy@sparkloan.nl' },
  contact: { phone: '+393501255841', email: 'contact@sparkloan.nl', whatsapp: '+393501255841' },
  agencies: [
    { name: 'Kantoor Amsterdam', address: 'Herengracht 100, 1015 BS Amsterdam', hours: 'Ma – Vr, 9:00 – 18:00' },
  ],
  bookingUrl: 'https://afspraak.sparkloan.nl',
};
