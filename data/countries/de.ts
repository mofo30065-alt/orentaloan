import type { CountryLegal } from './types';

export const de: CountryLegal = {
  code: 'DE',
  locale: 'de',
  lender: {
    name: 'Spark Finance Deutschland GmbH',
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
  dpo: { name: 'Datenschutzbeauftragter — Spark Finance Deutschland', email: 'datenschutz@sparkloan.de' },
  contact: { phone: '+493012345678', email: 'kontakt@sparkloan.de', whatsapp: '+491512345678' },
  agencies: [
    { name: 'Filiale Berlin', address: 'Friedrichstraße 68, 10117 Berlin', hours: 'Mo – Fr, 9:00 – 18:00' },
  ],
  bookingUrl: 'https://termin.sparkloan.de',
};
