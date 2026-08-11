import type { CountryLegal } from './types';

export const es: CountryLegal = {
  code: 'ES',
  locale: 'es',
  lender: {
    name: 'Spark Finance España S.A.',
    legalForm: 'Sociedad Anónima',
    capital: '3.000.000 €',
    registration: 'Registro Mercantil de Madrid, CIF A-87654321',
    regulator: 'Banco de España',
    regulatoryNumber: 'Banco de España n.º 8123',
    vat: 'ESA87654321',
  },
  publicationDirector: 'Lucía Fernández',
  host: { name: 'OVHcloud', address: '2 rue Kellermann, 59100 Roubaix, Francia' },
  mediator: { name: 'Banco de España — Servicio de Reclamaciones', url: 'https://www.bde.es' },
  coolingOffDays: 14,
  dpo: { name: 'Delegado de protección de datos — Spark Finance España', email: 'dpo@sparkloan.es' },
  contact: { phone: '+393501255841', email: 'contacto@sparkloan.es', whatsapp: '+393501255841' },
  agencies: [
    { name: 'Oficina de Madrid', address: 'Calle de Alcalá 45, 28014 Madrid', hours: 'Lun – Vie, 9:00 – 18:00' },
  ],
  bookingUrl: 'https://cita.sparkloan.es',
};
