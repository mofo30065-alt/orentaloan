import type { CountryLegal } from './types';

export const de: CountryLegal = {
  code: 'DE',
  locale: 'de',
  lender: {
    name: 'OrentaLoan Deutschland GmbH',
    legalForm: 'Gesellschaft mit beschränkter Haftung (GmbH)',
    capital: '1.000.000 €',
    registration: 'Amtsgericht Berlin-Charlottenburg, HRB 123456',
    regulator: 'BaFin — Bundesanstalt für Finanzdienstleistungsaufsicht',
    regulatoryNumber: 'BaFin-ID 100123456',
    vat: 'DE 123456789',
  },
  publicationDirector: 'Lukas Weber',
  host: { name: 'OVHcloud', address: '2 rue Kellermann, 59100 Roubaix, Frankreich' },
  mediator: { name: 'Ombudsmann der privaten Banken', url: 'https://www.bankenombudsmann.de' },
  coolingOffDays: 14,
  dpo: { name: 'Datenschutzbeauftragter — OrentaLoan Deutschland', email: 'datenschutz@orentaloan.de' },
  contact: { phone: '+447737143454', email: 'contact@orentaloan.com', whatsapp: '+447737143454' },
  agencies: [
    { name: 'Filiale Berlin', address: 'Friedrichstraße 68, 10117 Berlin', hours: 'Mo – Fr, 9:00 – 18:00' },
  ],
  bookingUrl: 'https://termin.orentaloan.de',
};
