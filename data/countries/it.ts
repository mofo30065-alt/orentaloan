import type { CountryLegal } from './types';

export const it: CountryLegal = {
  code: 'IT',
  locale: 'it',
  lender: {
    name: 'Spark Finance Italia S.p.A.',
    legalForm: 'Società per azioni',
    capital: '3.000.000 €',
    registration: 'Registro Imprese di Milano, P.IVA 12345670960',
    regulator: "Banca d'Italia",
    regulatoryNumber: "Banca d'Italia n. 19123",
    vat: 'IT12345670960',
  },
  publicationDirector: 'Marco Ricci',
  host: { name: 'OVHcloud', address: '2 rue Kellermann, 59100 Roubaix, Francia' },
  mediator: { name: 'Arbitro Bancario Finanziario (ABF)', url: 'https://www.arbitrobancariofinanziario.it' },
  coolingOffDays: 14,
  dpo: { name: 'Responsabile della protezione dei dati — Spark Finance Italia', email: 'dpo@sparkloan.it' },
  contact: { phone: '+390212345678', email: 'contatto@sparkloan.it', whatsapp: '+393312345678' },
  agencies: [
    { name: 'Filiale di Milano', address: 'Corso Buenos Aires 15, 20124 Milano', hours: 'Lun – Ven, 9:00 – 18:00' },
  ],
  bookingUrl: 'https://prenota.sparkloan.it',
};
