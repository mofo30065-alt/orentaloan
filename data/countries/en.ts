import type { CountryLegal } from './types';

export const en: CountryLegal = {
  code: 'IE',
  locale: 'en',
  lender: {
    name: 'Spark Finance Ireland Ltd',
    legalForm: 'Private company limited by shares',
    capital: '€1,000,000',
    registration: 'CRO No. 654321',
    regulator: 'Central Bank of Ireland',
    regulatoryNumber: 'CBI ref. C123456',
    vat: 'IE1234567X',
  },
  publicationDirector: 'Aoife Byrne',
  host: {
    name: 'Amazon Web Services EMEA SARL',
    address: 'Dublin, Ireland',
  },
  mediator: {
    name: 'Financial Services and Pensions Ombudsman (FSPO)',
    url: 'https://www.fspo.ie',
  },
  coolingOffDays: 14,
  dpo: {
    name: 'Data Protection Officer — Spark Finance Ireland',
    email: 'dpo@sparkloan.ie',
  },
  contact: {
    phone: '+35316701234',
    email: 'contact@sparkloan.ie',
    whatsapp: '+353851234567',
  },
  agencies: [
    {
      name: 'Dublin branch',
      address: '12 Dawson Street, Dublin 2, D02 XY45',
      hours: 'Mon – Fri, 9am – 6pm',
    },
  ],
  bookingUrl: 'https://booking.sparkloan.ie',
};
