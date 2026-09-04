import type { CountryLegal } from './types';

export const en: CountryLegal = {
  code: 'IE',
  locale: 'en',
  lender: {
    name: 'OrentaLoan Ireland Ltd',
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
    name: 'Data Protection Officer — OrentaLoan Ireland',
    email: 'dpo@orentaloan.ie',
  },
  contact: {
    phone: '+447737143454',
    email: 'contact@orentaloan.ie',
    whatsapp: '+447737143454',
  },
  agencies: [
    {
      name: 'Dublin branch',
      address: '12 Dawson Street, Dublin 2, D02 XY45',
      hours: 'Mon – Fri, 9am – 6pm',
    },
  ],
  bookingUrl: 'https://booking.orentaloan.ie',
};
