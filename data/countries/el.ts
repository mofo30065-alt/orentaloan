import type { CountryLegal } from './types';

export const el: CountryLegal = {
  code: 'GR', locale: 'el',
  lender: { name: 'OrentaLoan Ελλάς Α.Ε.', legalForm: 'Ανώνυμη εταιρεία', capital: '1.000.000 €', registration: 'ΓΕΜΗ 123456789000', regulator: 'Τράπεζα της Ελλάδος', regulatoryNumber: 'Αρ. αναφοράς 12345', vat: 'EL123456789' },
  publicationDirector: 'Eleni Papadopoulou', host: { name: 'OVHcloud', address: 'Ρουμπέ, Γαλλία' },
  mediator: { name: 'Ελληνικός Χρηματοοικονομικός Μεσολαβητής', url: 'https://hobis.gr' }, coolingOffDays: 14,
  dpo: { name: 'Υπεύθυνος προστασίας δεδομένων — OrentaLoan Ελλάς', email: 'dpo@orentaloan.gr' },
  contact: { phone: '+447737143454', email: 'contact@orentaloan.gr', whatsapp: '+447737143454' },
  agencies: [{ name: 'Υποκατάστημα Αθήνας', address: 'Λεωφόρος Αμαλίας 10, 10557 Αθήνα', hours: 'Δευτέρα – Παρασκευή, 9:00 – 18:00' }],
  bookingUrl: 'https://rdv.orentaloan.gr',
};
