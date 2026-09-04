import type { CountryLegal } from './types';

export const hr: CountryLegal = {
  code: 'HR', locale: 'hr',
  lender: { name: 'OrentaLoan Hrvatska d.d.', legalForm: 'Dioničko društvo', capital: '1.000.000 €', registration: 'MBS 080123456', regulator: 'Hrvatska narodna banka', regulatoryNumber: 'HNB br. 12345', vat: 'HR12345678901' },
  publicationDirector: 'Ivana Horvat', host: { name: 'OVHcloud', address: 'Roubaix, Francuska' },
  mediator: { name: 'Centar za mirenje pri Hrvatskoj gospodarskoj komori', url: 'https://www.hgk.hr' }, coolingOffDays: 14,
  dpo: { name: 'Službenik za zaštitu podataka — OrentaLoan Hrvatska', email: 'dpo@orentaloan.hr' },
  contact: { phone: '+447737143454', email: 'contact@orentaloan.com', whatsapp: '+447737143454' },
  agencies: [{ name: 'Podružnica Zagreb', address: 'Ilica 10, 10000 Zagreb', hours: 'Pon – Pet, 9:00 – 18:00' }],
  bookingUrl: 'https://rdv.orentaloan.hr',
};
