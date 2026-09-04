import type { CountryLegal } from './types';

export const sk: CountryLegal = {
  code: 'SK', locale: 'sk',
  lender: { name: 'OrentaLoan Slovensko a.s.', legalForm: 'Akciová spoločnosť', capital: '1 000 000 €', registration: 'IČO 12345678', regulator: 'Národná banka Slovenska', regulatoryNumber: 'NBS č. 12345', vat: 'SK1234567890' },
  publicationDirector: 'Zuzana Nováková', host: { name: 'OVHcloud', address: 'Roubaix, Francúzsko' },
  mediator: { name: 'Inštitút alternatívneho riešenia sporov', url: 'https://www.soi.sk' }, coolingOffDays: 14,
  dpo: { name: 'Zodpovedná osoba pre ochranu údajov — OrentaLoan Slovensko', email: 'dpo@orentaloan.sk' },
  contact: { phone: '+393501255841', email: 'kontakt@orentaloan.sk', whatsapp: '+393501255841' },
  agencies: [{ name: 'Pobočka Bratislava', address: 'Špitálska 10, 811 08 Bratislava', hours: 'Po – Pi, 9:00 – 18:00' }],
  bookingUrl: 'https://rdv.orentaloan.sk',
};
