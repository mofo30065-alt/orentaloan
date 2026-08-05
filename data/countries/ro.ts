import type { CountryLegal } from './types';

export const ro: CountryLegal = {
  code: 'RO',
  locale: 'ro',
  lender: {
    name: 'Spark Finance România S.A.',
    legalForm: 'Societate pe acțiuni',
    capital: '10.000.000 lei',
    registration: 'Registrul Comerțului J40/1234/2021, CUI 43215678',
    regulator: 'BNR — Banca Națională a României',
    regulatoryNumber: 'BNR nr. RG-PJR-12-123456',
    vat: 'RO43215678',
  },
  publicationDirector: 'Andrei Popescu',
  host: { name: 'OVHcloud', address: '2 rue Kellermann, 59100 Roubaix, Franța' },
  mediator: { name: 'Centrul de Soluționare Alternativă a Litigiilor în domeniul Bancar (CSALB)', url: 'https://www.csalb.ro' },
  coolingOffDays: 14,
  dpo: { name: 'Responsabil cu protecția datelor — Spark Finance România', email: 'dpo@sparkloan.ro' },
  contact: { phone: '+40211234567', email: 'contact@sparkloan.ro', whatsapp: '+40712345678' },
  agencies: [
    { name: 'Agenția București', address: 'Calea Victoriei 100, 010065 București', hours: 'Lun – Vin, 9:00 – 18:00' },
  ],
  bookingUrl: 'https://programare.sparkloan.ro',
};
