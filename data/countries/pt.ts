import type { CountryLegal } from './types';

export const pt: CountryLegal = {
  code: 'PT',
  locale: 'pt',
  lender: {
    name: 'OrentaLoan Portugal S.A.',
    legalForm: 'Sociedade Anónima',
    capital: '2.000.000 €',
    registration: 'Conservatória do Registo Comercial de Lisboa, NIPC 512345678',
    regulator: 'Banco de Portugal',
    regulatoryNumber: 'Banco de Portugal n.º 918',
    vat: 'PT512345678',
  },
  publicationDirector: 'Sofia Almeida',
  host: { name: 'OVHcloud', address: '2 rue Kellermann, 59100 Roubaix, França' },
  mediator: { name: 'CNIACC — Centro Nacional de Informação e Arbitragem de Conflitos de Consumo', url: 'https://www.cniacc.pt' },
  coolingOffDays: 14,
  dpo: { name: 'Encarregado da proteção de dados — OrentaLoan Portugal', email: 'dpo@orentaloan.pt' },
  contact: { phone: '+447737143454', email: 'contacto@orentaloan.pt', whatsapp: '+447737143454' },
  agencies: [
    { name: 'Agência de Lisboa', address: 'Avenida da Liberdade 110, 1250-146 Lisboa', hours: 'Seg – Sex, 9:00 – 18:00' },
  ],
  bookingUrl: 'https://marcacao.orentaloan.pt',
};
