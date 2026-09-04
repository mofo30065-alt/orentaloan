import type { CountryLegal } from './types';

export const bg: CountryLegal = {
  code: 'BG',
  locale: 'bg',
  lender: {
    name: 'Спарк Файнанс България АД',
    legalForm: 'Акционерно дружество',
    capital: '2 000 000 лв.',
    registration: 'Търговски регистър, ЕИК 201234567',
    regulator: 'БНБ — Българска народна банка',
    regulatoryNumber: 'БНБ рег. № BGR00123',
    vat: 'BG201234567',
  },
  publicationDirector: 'Мария Иванова',
  host: { name: 'OVHcloud', address: '2 rue Kellermann, 59100 Roubaix, Франция' },
  mediator: { name: 'Помирителна комисия за платежни спорове', url: 'https://www.kzp.bg' },
  coolingOffDays: 14,
  dpo: { name: 'Длъжностно лице по защита на данните — Спарк Файнанс България', email: 'dpo@orentaloan.bg' },
  contact: { phone: '+447737143454', email: 'contact@orentaloan.com', whatsapp: '+447737143454' },
  agencies: [
    { name: 'Офис София', address: 'бул. Витоша 50, 1000 София', hours: 'Пон – Пет, 9:00 – 18:00' },
  ],
  bookingUrl: 'https://zapazwane.orentaloan.bg',
};
