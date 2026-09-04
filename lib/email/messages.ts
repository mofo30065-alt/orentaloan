import frForm from '@/messages/fr/form.json';
import enForm from '@/messages/en/form.json';
import deForm from '@/messages/de/form.json';
import esForm from '@/messages/es/form.json';
import itForm from '@/messages/it/form.json';
import nlForm from '@/messages/nl/form.json';
import ptForm from '@/messages/pt/form.json';
import plForm from '@/messages/pl/form.json';
import roForm from '@/messages/ro/form.json';
import bgForm from '@/messages/bg/form.json';
import elForm from '@/messages/el/form.json';
import fiForm from '@/messages/fi/form.json';
import skForm from '@/messages/sk/form.json';
import hrForm from '@/messages/hr/form.json';
import ltForm from '@/messages/lt/form.json';

/**
 * i18n des corps d'e-mails **client** (10 langues, repli FR par clé).
 * Les libellés d'énumérations et de champs réutilisent messages/<locale>/form.json
 * (déjà traduits) ; seule la prose propre aux e-mails est traduite ici.
 */

type FormJson = { options: Record<string, Record<string, string>>; fields: Record<string, string> };
const FR_FORM = frForm as FormJson;
const FORM: Record<string, FormJson> = {
  fr: frForm as FormJson,
  en: enForm as FormJson,
  de: deForm as FormJson,
  es: esForm as FormJson,
  it: itForm as FormJson,
  nl: nlForm as FormJson,
  pt: ptForm as FormJson,
  pl: plForm as FormJson,
  ro: roForm as FormJson,
  bg: bgForm as FormJson,
  el: elForm as FormJson,
  fi: fiForm as FormJson,
  sk: skForm as FormJson,
  hr: hrForm as FormJson,
  lt: ltForm as FormJson,
};

/** Libellé traduit d'une valeur d'énumération (repli FR puis clé brute). */
export function optionLabel(locale: string, group: string, key: string): string {
  const loc = FORM[locale]?.options?.[group]?.[key];
  return loc ?? FR_FORM.options?.[group]?.[key] ?? key;
}

/** Interpolation simple `{clé}`. */
export function fmt(template: string, vars: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? ''));
}

interface EmailStrings {
  ackSubject: string;
  greetingName: string;
  greeting: string;
  ackIntro: string;
  lblRef: string;
  lblProject: string;
  lblAmountWanted: string;
  lblDurationWanted: string;
  keepRef: string;
  nextTitle: string;
  next1: string;
  next2: string;
  next3: string;
  ctaSite: string;
  contactSubject: string;
  contactIntro: string;
  simSubject: string;
  simIntro: string;
  lblAmountBorrowed: string;
  lblDuration: string;
  lblRate: string;
  lblApr: string;
  lblMonthly: string;
  lblTotalCost: string;
  lblTotalDue: string;
  simDisclaimer: string;
  ctaEligibility: string;
  months: string;
  footerLegal: string;
  nlSubject: string;
  nlIntro: string;
  nlCta: string;
  nlIgnore: string;
}

const fr: EmailStrings = {
  ackSubject: 'Votre demande {ref} est bien reçue — OrentaLoan',
  greetingName: 'Bonjour {name},',
  greeting: 'Bonjour,',
  ackIntro: "Nous avons bien reçu votre demande de financement. Un interlocuteur étudie votre situation réelle et vous recontacte dans le délai annoncé.",
  lblRef: 'Référence',
  lblProject: 'Type de projet',
  lblAmountWanted: 'Montant souhaité',
  lblDurationWanted: 'Durée souhaitée',
  keepRef: 'Conservez votre référence {ref} pour tout échange.',
  nextTitle: 'La suite :',
  next1: 'Nous vérifions les éléments de votre dossier.',
  next2: "Un interlocuteur vous recontacte pour l'étude.",
  next3: 'Vous recevez une réponse motivée dans le délai annoncé.',
  ctaSite: 'Accéder au site',
  contactSubject: 'Nous avons bien reçu votre message — OrentaLoan',
  contactIntro: 'Merci de nous avoir écrit. Votre message est bien arrivé et nous vous répondons rapidement.',
  simSubject: 'Votre simulation — OrentaLoan',
  simIntro: "Voici l'estimation que vous avez demandée. Elle est indicative et ne constitue pas une offre de crédit.",
  lblAmountBorrowed: 'Montant emprunté',
  lblDuration: 'Durée',
  lblRate: 'Taux débiteur fixe',
  lblApr: 'TAEG fixe',
  lblMonthly: 'Mensualité estimée',
  lblTotalCost: 'Coût total du crédit',
  lblTotalDue: 'Montant total dû',
  simDisclaimer: 'Exemple représentatif hors assurance facultative. Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.',
  ctaEligibility: 'Vérifier mon éligibilité',
  months: '{n} mois',
  footerLegal: "Chiffres indicatifs, non contractuels et sous réserve d'acceptation de votre dossier. Droit de rétractation de {days} jours. Un crédit vous engage et doit être remboursé.",
  nlSubject: 'Confirmez votre inscription — OrentaLoan',
  nlIntro: 'Vous avez demandé à recevoir nos repères sur le crédit. Confirmez votre inscription en un clic :',
  nlCta: 'Confirmer mon inscription',
  nlIgnore: "Si vous n'êtes pas à l'origine de cette demande, ignorez cet e-mail.",
};

const en: EmailStrings = {
  ackSubject: 'Your request {ref} has been received — OrentaLoan',
  greetingName: 'Hello {name},',
  greeting: 'Hello,',
  ackIntro: 'We have received your financing request. An advisor is reviewing your actual situation and will get back to you within the stated time.',
  lblRef: 'Reference',
  lblProject: 'Project type',
  lblAmountWanted: 'Requested amount',
  lblDurationWanted: 'Requested term',
  keepRef: 'Keep your reference {ref} for any exchange.',
  nextTitle: 'What happens next:',
  next1: 'We check the elements of your file.',
  next2: 'An advisor gets back to you for the review.',
  next3: 'You receive a reasoned reply within the stated time.',
  ctaSite: 'Go to the website',
  contactSubject: 'We have received your message — OrentaLoan',
  contactIntro: 'Thank you for writing to us. Your message has arrived and we will reply shortly.',
  simSubject: 'Your simulation — OrentaLoan',
  simIntro: 'Here is the estimate you requested. It is indicative and does not constitute a credit offer.',
  lblAmountBorrowed: 'Amount borrowed',
  lblDuration: 'Term',
  lblRate: 'Fixed borrowing rate',
  lblApr: 'Fixed APR',
  lblMonthly: 'Estimated monthly payment',
  lblTotalCost: 'Total cost of credit',
  lblTotalDue: 'Total amount due',
  simDisclaimer: 'Representative example excluding optional insurance. A loan commits you and must be repaid. Check your repayment capacity before committing.',
  ctaEligibility: 'Check my eligibility',
  months: '{n} months',
  footerLegal: 'Indicative, non-contractual figures, subject to acceptance of your file. Withdrawal period of {days} days. A loan commits you and must be repaid.',
  nlSubject: 'Confirm your subscription — OrentaLoan',
  nlIntro: 'You asked to receive our credit insights. Confirm your subscription in one click:',
  nlCta: 'Confirm my subscription',
  nlIgnore: 'If you did not make this request, please ignore this email.',
};

const de: EmailStrings = {
  ackSubject: 'Ihre Anfrage {ref} ist eingegangen — OrentaLoan',
  greetingName: 'Hallo {name},',
  greeting: 'Hallo,',
  ackIntro: 'Wir haben Ihre Finanzierungsanfrage erhalten. Ein Ansprechpartner prüft Ihre tatsächliche Situation und meldet sich innerhalb der angegebenen Frist.',
  lblRef: 'Referenz',
  lblProject: 'Projektart',
  lblAmountWanted: 'Gewünschter Betrag',
  lblDurationWanted: 'Gewünschte Laufzeit',
  keepRef: 'Bewahren Sie Ihre Referenz {ref} für jeden Austausch auf.',
  nextTitle: 'So geht es weiter:',
  next1: 'Wir prüfen die Angaben Ihrer Unterlagen.',
  next2: 'Ein Ansprechpartner meldet sich zur Prüfung.',
  next3: 'Sie erhalten innerhalb der angegebenen Frist eine begründete Antwort.',
  ctaSite: 'Zur Website',
  contactSubject: 'Wir haben Ihre Nachricht erhalten — OrentaLoan',
  contactIntro: 'Danke für Ihre Nachricht. Sie ist bei uns eingegangen und wir antworten Ihnen in Kürze.',
  simSubject: 'Ihre Simulation — OrentaLoan',
  simIntro: 'Hier ist die von Ihnen angeforderte Schätzung. Sie ist unverbindlich und stellt kein Kreditangebot dar.',
  lblAmountBorrowed: 'Kreditbetrag',
  lblDuration: 'Laufzeit',
  lblRate: 'Fester Sollzins',
  lblApr: 'Effektiver Jahreszins',
  lblMonthly: 'Geschätzte Monatsrate',
  lblTotalCost: 'Gesamtkosten des Kredits',
  lblTotalDue: 'Gesamtbetrag',
  simDisclaimer: 'Repräsentatives Beispiel ohne optionale Versicherung. Ein Kredit verpflichtet Sie und muss zurückgezahlt werden. Prüfen Sie vor Abschluss Ihre Rückzahlungsfähigkeit.',
  ctaEligibility: 'Meine Eignung prüfen',
  months: '{n} Monate',
  footerLegal: 'Unverbindliche, nicht vertragliche Angaben, vorbehaltlich der Annahme Ihrer Unterlagen. Widerrufsrecht von {days} Tagen. Ein Kredit verpflichtet Sie und muss zurückgezahlt werden.',
  nlSubject: 'Bestätigen Sie Ihre Anmeldung — OrentaLoan',
  nlIntro: 'Sie möchten unsere Kredit-Hinweise erhalten. Bestätigen Sie Ihre Anmeldung mit einem Klick:',
  nlCta: 'Anmeldung bestätigen',
  nlIgnore: 'Falls diese Anfrage nicht von Ihnen stammt, ignorieren Sie diese E-Mail.',
};

const es: EmailStrings = {
  ackSubject: 'Su solicitud {ref} se ha recibido — OrentaLoan',
  greetingName: 'Hola {name},',
  greeting: 'Hola,',
  ackIntro: 'Hemos recibido su solicitud de financiación. Un interlocutor estudia su situación real y le contactará en el plazo indicado.',
  lblRef: 'Referencia',
  lblProject: 'Tipo de proyecto',
  lblAmountWanted: 'Importe solicitado',
  lblDurationWanted: 'Plazo solicitado',
  keepRef: 'Conserve su referencia {ref} para cualquier gestión.',
  nextTitle: 'Lo que sigue:',
  next1: 'Verificamos los elementos de su expediente.',
  next2: 'Un interlocutor le contacta para el estudio.',
  next3: 'Recibe una respuesta motivada en el plazo indicado.',
  ctaSite: 'Ir al sitio',
  contactSubject: 'Hemos recibido su mensaje — OrentaLoan',
  contactIntro: 'Gracias por escribirnos. Su mensaje ha llegado y le responderemos en breve.',
  simSubject: 'Su simulación — OrentaLoan',
  simIntro: 'Aquí tiene la estimación que solicitó. Es indicativa y no constituye una oferta de crédito.',
  lblAmountBorrowed: 'Importe prestado',
  lblDuration: 'Plazo',
  lblRate: 'Tipo deudor fijo',
  lblApr: 'TAE fija',
  lblMonthly: 'Cuota mensual estimada',
  lblTotalCost: 'Coste total del crédito',
  lblTotalDue: 'Importe total adeudado',
  simDisclaimer: 'Ejemplo representativo sin seguro opcional. Un crédito le compromete y debe reembolsarse. Verifique su capacidad de reembolso antes de comprometerse.',
  ctaEligibility: 'Comprobar mi elegibilidad',
  months: '{n} meses',
  footerLegal: 'Cifras indicativas, no contractuales y sujetas a la aceptación de su expediente. Derecho de desistimiento de {days} días. Un crédito le compromete y debe reembolsarse.',
  nlSubject: 'Confirme su suscripción — OrentaLoan',
  nlIntro: 'Ha solicitado recibir nuestros consejos sobre crédito. Confirme su suscripción con un clic:',
  nlCta: 'Confirmar mi suscripción',
  nlIgnore: 'Si no ha realizado esta solicitud, ignore este correo.',
};

const it: EmailStrings = {
  ackSubject: 'La tua richiesta {ref} è stata ricevuta — OrentaLoan',
  greetingName: 'Buongiorno {name},',
  greeting: 'Buongiorno,',
  ackIntro: 'Abbiamo ricevuto la tua richiesta di finanziamento. Un interlocutore esamina la tua situazione reale e ti ricontatta entro i tempi indicati.',
  lblRef: 'Riferimento',
  lblProject: 'Tipo di progetto',
  lblAmountWanted: 'Importo richiesto',
  lblDurationWanted: 'Durata richiesta',
  keepRef: 'Conserva il tuo riferimento {ref} per ogni comunicazione.',
  nextTitle: 'I prossimi passi:',
  next1: 'Verifichiamo gli elementi della tua pratica.',
  next2: "Un interlocutore ti ricontatta per l'esame.",
  next3: 'Ricevi una risposta motivata entro i tempi indicati.',
  ctaSite: 'Vai al sito',
  contactSubject: 'Abbiamo ricevuto il tuo messaggio — OrentaLoan',
  contactIntro: 'Grazie per averci scritto. Il tuo messaggio è arrivato e ti risponderemo a breve.',
  simSubject: 'La tua simulazione — OrentaLoan',
  simIntro: "Ecco la stima che hai richiesto. È indicativa e non costituisce un'offerta di credito.",
  lblAmountBorrowed: 'Importo finanziato',
  lblDuration: 'Durata',
  lblRate: 'Tasso debitore fisso',
  lblApr: 'TAEG fisso',
  lblMonthly: 'Rata mensile stimata',
  lblTotalCost: 'Costo totale del credito',
  lblTotalDue: 'Importo totale dovuto',
  simDisclaimer: "Esempio rappresentativo esclusa l'assicurazione facoltativa. Un credito ti impegna e deve essere rimborsato. Verifica la tua capacità di rimborso prima di impegnarti.",
  ctaEligibility: 'Verifica la mia idoneità',
  months: '{n} mesi',
  footerLegal: "Cifre indicative, non contrattuali e soggette all'accettazione della tua pratica. Diritto di recesso di {days} giorni. Un credito ti impegna e deve essere rimborsato.",
  nlSubject: 'Conferma la tua iscrizione — OrentaLoan',
  nlIntro: 'Hai chiesto di ricevere i nostri consigli sul credito. Conferma la tua iscrizione con un clic:',
  nlCta: 'Conferma la mia iscrizione',
  nlIgnore: 'Se non hai effettuato questa richiesta, ignora questa e-mail.',
};

const nl: EmailStrings = {
  ackSubject: 'Uw aanvraag {ref} is ontvangen — OrentaLoan',
  greetingName: 'Hallo {name},',
  greeting: 'Hallo,',
  ackIntro: 'We hebben uw financieringsaanvraag ontvangen. Een contactpersoon bekijkt uw werkelijke situatie en neemt binnen de aangegeven termijn contact op.',
  lblRef: 'Referentie',
  lblProject: 'Type project',
  lblAmountWanted: 'Gewenst bedrag',
  lblDurationWanted: 'Gewenste looptijd',
  keepRef: 'Bewaar uw referentie {ref} voor elk contact.',
  nextTitle: 'Hoe het verdergaat:',
  next1: 'We controleren de gegevens van uw dossier.',
  next2: 'Een contactpersoon neemt contact op voor de beoordeling.',
  next3: 'U ontvangt binnen de aangegeven termijn een gemotiveerd antwoord.',
  ctaSite: 'Naar de website',
  contactSubject: 'We hebben uw bericht ontvangen — OrentaLoan',
  contactIntro: 'Bedankt voor uw bericht. Het is goed aangekomen en we antwoorden u spoedig.',
  simSubject: 'Uw simulatie — OrentaLoan',
  simIntro: 'Hier is de door u gevraagde schatting. Ze is indicatief en vormt geen kredietaanbod.',
  lblAmountBorrowed: 'Geleend bedrag',
  lblDuration: 'Looptijd',
  lblRate: 'Vaste debetrente',
  lblApr: 'Vast JKP',
  lblMonthly: 'Geschatte maandlast',
  lblTotalCost: 'Totale kredietkosten',
  lblTotalDue: 'Totaal verschuldigd bedrag',
  simDisclaimer: 'Representatief voorbeeld exclusief optionele verzekering. Een lening verplicht u en moet worden terugbetaald. Controleer uw terugbetalingscapaciteit voordat u zich verbindt.',
  ctaEligibility: 'Mijn geschiktheid controleren',
  months: '{n} maanden',
  footerLegal: 'Indicatieve, niet-contractuele cijfers, onder voorbehoud van acceptatie van uw dossier. Herroepingsrecht van {days} dagen. Een lening verplicht u en moet worden terugbetaald.',
  nlSubject: 'Bevestig uw inschrijving — OrentaLoan',
  nlIntro: 'U hebt gevraagd om onze krediettips te ontvangen. Bevestig uw inschrijving met één klik:',
  nlCta: 'Mijn inschrijving bevestigen',
  nlIgnore: 'Als u dit verzoek niet hebt gedaan, negeer deze e-mail.',
};

const pt: EmailStrings = {
  ackSubject: 'O seu pedido {ref} foi recebido — OrentaLoan',
  greetingName: 'Olá {name},',
  greeting: 'Olá,',
  ackIntro: 'Recebemos o seu pedido de financiamento. Um interlocutor analisa a sua situação real e entra em contacto no prazo indicado.',
  lblRef: 'Referência',
  lblProject: 'Tipo de projeto',
  lblAmountWanted: 'Montante pretendido',
  lblDurationWanted: 'Prazo pretendido',
  keepRef: 'Guarde a sua referência {ref} para qualquer contacto.',
  nextTitle: 'O que se segue:',
  next1: 'Verificamos os elementos do seu processo.',
  next2: 'Um interlocutor entra em contacto para a análise.',
  next3: 'Recebe uma resposta fundamentada no prazo indicado.',
  ctaSite: 'Ir para o site',
  contactSubject: 'Recebemos a sua mensagem — OrentaLoan',
  contactIntro: 'Obrigado por nos escrever. A sua mensagem chegou e responderemos em breve.',
  simSubject: 'A sua simulação — OrentaLoan',
  simIntro: 'Aqui está a estimativa que solicitou. É indicativa e não constitui uma oferta de crédito.',
  lblAmountBorrowed: 'Montante financiado',
  lblDuration: 'Prazo',
  lblRate: 'Taxa devedora fixa',
  lblApr: 'TAEG fixa',
  lblMonthly: 'Prestação mensal estimada',
  lblTotalCost: 'Custo total do crédito',
  lblTotalDue: 'Montante total em dívida',
  simDisclaimer: 'Exemplo representativo sem seguro facultativo. Um crédito compromete-o e deve ser reembolsado. Verifique a sua capacidade de reembolso antes de se comprometer.',
  ctaEligibility: 'Verificar a minha elegibilidade',
  months: '{n} meses',
  footerLegal: 'Valores indicativos, não contratuais e sujeitos à aceitação do seu processo. Direito de retratação de {days} dias. Um crédito compromete-o e deve ser reembolsado.',
  nlSubject: 'Confirme a sua inscrição — OrentaLoan',
  nlIntro: 'Pediu para receber os nossos conselhos sobre crédito. Confirme a sua inscrição com um clique:',
  nlCta: 'Confirmar a minha inscrição',
  nlIgnore: 'Se não fez este pedido, ignore este e-mail.',
};

const pl: EmailStrings = {
  ackSubject: 'Twój wniosek {ref} został odebrany — OrentaLoan',
  greetingName: 'Dzień dobry {name},',
  greeting: 'Dzień dobry,',
  ackIntro: 'Otrzymaliśmy Twój wniosek o finansowanie. Opiekun analizuje Twoją rzeczywistą sytuację i skontaktuje się w podanym terminie.',
  lblRef: 'Numer referencyjny',
  lblProject: 'Rodzaj projektu',
  lblAmountWanted: 'Wnioskowana kwota',
  lblDurationWanted: 'Wnioskowany okres',
  keepRef: 'Zachowaj numer referencyjny {ref} do wszelkich kontaktów.',
  nextTitle: 'Co dalej:',
  next1: 'Sprawdzamy elementy Twojego wniosku.',
  next2: 'Opiekun kontaktuje się w celu analizy.',
  next3: 'Otrzymujesz uzasadnioną odpowiedź w podanym terminie.',
  ctaSite: 'Przejdź do strony',
  contactSubject: 'Otrzymaliśmy Twoją wiadomość — OrentaLoan',
  contactIntro: 'Dziękujemy za wiadomość. Dotarła do nas i wkrótce odpowiemy.',
  simSubject: 'Twoja symulacja — OrentaLoan',
  simIntro: 'Oto szacunek, o który prosiłeś. Ma charakter orientacyjny i nie stanowi oferty kredytowej.',
  lblAmountBorrowed: 'Kwota kredytu',
  lblDuration: 'Okres',
  lblRate: 'Stałe oprocentowanie',
  lblApr: 'Stałe RRSO',
  lblMonthly: 'Szacowana rata miesięczna',
  lblTotalCost: 'Całkowity koszt kredytu',
  lblTotalDue: 'Całkowita kwota do zapłaty',
  simDisclaimer: 'Przykład reprezentatywny bez opcjonalnego ubezpieczenia. Kredyt zobowiązuje i musi zostać spłacony. Sprawdź swoją zdolność do spłaty przed zobowiązaniem się.',
  ctaEligibility: 'Sprawdź moją kwalifikowalność',
  months: '{n} mies.',
  footerLegal: 'Dane orientacyjne, niewiążące, z zastrzeżeniem akceptacji wniosku. Prawo odstąpienia w ciągu {days} dni. Kredyt zobowiązuje i musi zostać spłacony.',
  nlSubject: 'Potwierdź zapis — OrentaLoan',
  nlIntro: 'Poprosiłeś o otrzymywanie naszych porad o kredytach. Potwierdź zapis jednym kliknięciem:',
  nlCta: 'Potwierdź zapis',
  nlIgnore: 'Jeśli to nie Ty wysłałeś tę prośbę, zignoruj tę wiadomość.',
};

const ro: EmailStrings = {
  ackSubject: 'Cererea dumneavoastră {ref} a fost primită — OrentaLoan',
  greetingName: 'Bună ziua, {name},',
  greeting: 'Bună ziua,',
  ackIntro: 'Am primit cererea dumneavoastră de finanțare. Un interlocutor analizează situația reală și vă contactează în termenul anunțat.',
  lblRef: 'Referință',
  lblProject: 'Tip de proiect',
  lblAmountWanted: 'Sumă solicitată',
  lblDurationWanted: 'Durată solicitată',
  keepRef: 'Păstrați referința {ref} pentru orice comunicare.',
  nextTitle: 'Ce urmează:',
  next1: 'Verificăm elementele dosarului dumneavoastră.',
  next2: 'Un interlocutor vă contactează pentru analiză.',
  next3: 'Primiți un răspuns motivat în termenul anunțat.',
  ctaSite: 'Accesați site-ul',
  contactSubject: 'Am primit mesajul dumneavoastră — OrentaLoan',
  contactIntro: 'Vă mulțumim că ne-ați scris. Mesajul a ajuns și vă răspundem în curând.',
  simSubject: 'Simularea dumneavoastră — OrentaLoan',
  simIntro: 'Iată estimarea solicitată. Este orientativă și nu constituie o ofertă de credit.',
  lblAmountBorrowed: 'Sumă împrumutată',
  lblDuration: 'Durată',
  lblRate: 'Rată fixă a dobânzii',
  lblApr: 'DAE fixă',
  lblMonthly: 'Rată lunară estimată',
  lblTotalCost: 'Costul total al creditului',
  lblTotalDue: 'Suma totală datorată',
  simDisclaimer: 'Exemplu reprezentativ fără asigurarea opțională. Un credit vă angajează și trebuie rambursat. Verificați capacitatea de rambursare înainte de a vă angaja.',
  ctaEligibility: 'Verifică eligibilitatea mea',
  months: '{n} luni',
  footerLegal: 'Cifre orientative, necontractuale și sub rezerva acceptării dosarului. Drept de retragere de {days} zile. Un credit vă angajează și trebuie rambursat.',
  nlSubject: 'Confirmați abonarea — OrentaLoan',
  nlIntro: 'Ați cerut să primiți sfaturile noastre despre credit. Confirmați abonarea cu un clic:',
  nlCta: 'Confirmă abonarea',
  nlIgnore: 'Dacă nu dumneavoastră ați făcut această solicitare, ignorați acest e-mail.',
};

const bg: EmailStrings = {
  ackSubject: 'Вашата заявка {ref} е получена — OrentaLoan',
  greetingName: 'Здравейте, {name},',
  greeting: 'Здравейте,',
  ackIntro: 'Получихме Вашата заявка за финансиране. Служител разглежда реалната Ви ситуация и ще се свърже с Вас в обявения срок.',
  lblRef: 'Референция',
  lblProject: 'Тип проект',
  lblAmountWanted: 'Искана сума',
  lblDurationWanted: 'Искан срок',
  keepRef: 'Запазете референцията {ref} за всяка комуникация.',
  nextTitle: 'Какво следва:',
  next1: 'Проверяваме елементите на Вашето досие.',
  next2: 'Служител се свързва с Вас за проучването.',
  next3: 'Получавате мотивиран отговор в обявения срок.',
  ctaSite: 'Към сайта',
  contactSubject: 'Получихме Вашето съобщение — OrentaLoan',
  contactIntro: 'Благодарим Ви, че ни писахте. Съобщението Ви пристигна и ще Ви отговорим скоро.',
  simSubject: 'Вашата симулация — OrentaLoan',
  simIntro: 'Ето изчислението, което поискахте. То е ориентировъчно и не представлява кредитна оферта.',
  lblAmountBorrowed: 'Сума на кредита',
  lblDuration: 'Срок',
  lblRate: 'Фиксиран лихвен процент',
  lblApr: 'Фиксиран ГПР',
  lblMonthly: 'Приблизителна месечна вноска',
  lblTotalCost: 'Обща цена на кредита',
  lblTotalDue: 'Обща дължима сума',
  simDisclaimer: 'Представителен пример без незадължителна застраховка. Кредитът Ви задължава и трябва да бъде погасен. Проверете възможността си за погасяване, преди да се ангажирате.',
  ctaEligibility: 'Проверете допустимостта ми',
  months: '{n} месеца',
  footerLegal: 'Ориентировъчни, необвързващи стойности, при условие че досието Ви бъде одобрено. Право на отказ от {days} дни. Кредитът Ви задължава и трябва да бъде погасен.',
  nlSubject: 'Потвърдете абонамента си — OrentaLoan',
  nlIntro: 'Поискахте да получавате нашите съвети за кредити. Потвърдете абонамента с едно кликване:',
  nlCta: 'Потвърдете абонамента',
  nlIgnore: 'Ако не сте направили тази заявка, игнорирайте този имейл.',
};

const DICT: Record<string, EmailStrings> = {
  fr,
  en,
  de,
  es,
  it,
  nl,
  pt,
  pl,
  ro,
  bg,
  el: fr,
  fi: fr,
  sk: fr,
  hr: fr,
  lt: fr,
};

/** Renvoie les chaînes d'e-mail de la locale, avec repli FR par clé. */
export function strings(locale: string): EmailStrings {
  return { ...fr, ...(DICT[locale] ?? {}) };
}
