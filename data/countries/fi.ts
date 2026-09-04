import type { CountryLegal } from './types';

export const fi: CountryLegal = {
  code: 'FI', locale: 'fi',
  lender: { name: 'OrentaLoan Finland Oy', legalForm: 'Osakeyhtiö', capital: '1 000 000 €', registration: 'Y-tunnus 1234567-8', regulator: 'Finanssivalvonta', regulatoryNumber: 'FIVA viite 12345', vat: 'FI12345678' },
  publicationDirector: 'Aino Virtanen', host: { name: 'OVHcloud', address: 'Roubaix, Ranska' },
  mediator: { name: 'FINE Vakuutus- ja rahoitusneuvonta', url: 'https://www.fine.fi' }, coolingOffDays: 14,
  dpo: { name: 'Tietosuojavastaava — OrentaLoan Finland', email: 'dpo@orentaloan.fi' },
  contact: { phone: '+393501255841', email: 'contact@orentaloan.fi', whatsapp: '+393501255841' },
  agencies: [{ name: 'Helsingin toimipiste', address: 'Mannerheimintie 12, 00100 Helsinki', hours: 'Ma – Pe, 9.00 – 18.00' }],
  bookingUrl: 'https://rdv.orentaloan.fi',
};
