import type { CountryLegal } from './types';

export const lt: CountryLegal = {
  code: 'LT', locale: 'lt',
  lender: { name: 'OrentaLoan Lietuva UAB', legalForm: 'Uždaroji akcinė bendrovė', capital: '1 000 000 €', registration: 'Juridinio asmens kodas 123456789', regulator: 'Lietuvos bankas', regulatoryNumber: 'LB nuoroda 12345', vat: 'LT123456789' },
  publicationDirector: 'Austėja Kazlauskaitė', host: { name: 'OVHcloud', address: 'Roubaix, Prancūzija' },
  mediator: { name: 'Lietuvos banko vartotojų ir finansų rinkos dalyvių ginčai', url: 'https://www.lb.lt' }, coolingOffDays: 14,
  dpo: { name: 'Duomenų apsaugos pareigūnas — OrentaLoan Lietuva', email: 'dpo@orentaloan.lt' },
  contact: { phone: '+393501255841', email: 'kontakt@orentaloan.lt', whatsapp: '+393501255841' },
  agencies: [{ name: 'Vilniaus skyrius', address: 'Gedimino pr. 10, LT-01103 Vilnius', hours: 'I–V, 9:00–18:00' }],
  bookingUrl: 'https://rdv.orentaloan.lt',
};
