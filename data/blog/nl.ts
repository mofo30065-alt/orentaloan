import type { Article } from './types';

const TEAM = 'De redactie';

export const nl: Article[] = [
  {
    slug: 'comprendre-inscription-ficp',
    category: 'fichage',
    title: 'Geregistreerd bij het kredietregister: wat het echt verandert voor een lening',
    excerpt:
      'Een registratie bij het kredietregister sluit niet alle deuren. Wat de registratie blokkeert, wat ze niet belet en hoe u verder komt.',
    author: TEAM,
    date: '2026-06-15',
    readingMinutes: 6,
    body: [
      {
        heading: 'Wat het register is',
        paragraphs: [
          'Kredietregisters leggen gekwalificeerde betalingsincidenten vast. Erin voorkomen wijst op een betalingsachterstand uit het verleden: het is geen verbod om te lenen.',
          'De registratie is tijdelijk: ze wordt opgeheven bij regularisatie van het incident, of na afloop van een maximale termijn.',
        ],
      },
      {
        heading: 'Wat de registratie blokkeert',
        paragraphs: [
          'Zolang u geregistreerd bent, wordt klassiek krediet op basis van een eenvoudige score bijna altijd geweigerd: klassieke banken raadplegen het register en stoppen daar.',
        ],
      },
      {
        heading: 'Wat mogelijk blijft',
        paragraphs: [
          'Een financiering gedekt door een echte zekerheid — een woning bijvoorbeeld — kan ondanks de registratie worden bestudeerd, omdat de beslissing niet langer alleen op de score berust.',
          'Controleer vooral uw situatie bij het kredietregister (in Nederland het BKR): het recht op inzage in uw gegevens is kosteloos.',
        ],
      },
    ],
  },
  {
    slug: 'rachat-credit-hypothecaire-guide',
    category: 'rachat',
    title: 'Hypothecaire herfinanciering: wanneer uw woning een oplossing wordt',
    excerpt:
      'Uw leningen samenvoegen door te steunen op uw woning: voor wie het relevant is, wat het verandert aan de termijn en de grenzen.',
    author: TEAM,
    date: '2026-07-02',
    readingMinutes: 8,
    body: [
      {
        heading: 'Het principe',
        paragraphs: [
          'Hypothecaire herfinanciering brengt uw lopende leningen samen in één lening, gedekt door uw woning. De termijn daalt, de looptijd verlengt, de totale kost stijgt: het is een afweging, geen mirakel.',
        ],
      },
      {
        heading: 'Voor wie het relevant is',
        paragraphs: [
          'Een eigenaar wiens budget krap staat door meerdere leningen, of wiens score de toegang tot klassiek krediet blokkeert. De zekerheid neemt het over van de score.',
        ],
      },
      {
        heading: 'De grenzen om te kennen',
        paragraphs: [
          'De looptijd verlengen verhoogt de totale kost: alleen doen als de lagere termijn echt nodig is.',
          'De woning dient als zekerheid: een wanbetaling kan tot uitwinning leiden. De beslissing wordt met kennis van zaken genomen.',
        ],
      },
    ],
  },
  {
    slug: 'taux-endettement-35-pourcent',
    category: 'budget',
    title: 'Schuldratio: waarom 35 % geen muur is',
    excerpt:
      'De drempel van 35 % is een prudentiële richtwaarde, geen absolute regel. Hoe ze wordt berekend en wat ze kan nuanceren.',
    author: TEAM,
    date: '2026-07-12',
    readingMinutes: 5,
    body: [
      {
        heading: 'Hoe ze wordt berekend',
        paragraphs: [
          'De schuldratio zet uw kredietlasten af tegen uw inkomsten. Men deelt het geheel van uw termijnen, de toekomstige inbegrepen, door uw netto-inkomen en drukt het resultaat uit in procent.',
        ],
      },
      {
        heading: 'Een richtwaarde, geen guillotine',
        paragraphs: [
          'De drempel van 35 % kadert het risico, maar het "resterend leefgeld" telt evenzeer: bij hoge inkomsten kan de drempel licht overschrijden houdbaar blijven.',
        ],
      },
      {
        heading: 'Ze verlagen',
        paragraphs: [
          'Leningen samenvoegen, een looptijd verlengen, een bedrag inbrengen of een kleine lening aflossen: meerdere hefbomen brengen de ratio terug naar een comfortabele zone.',
        ],
      },
    ],
  },
  {
    slug: 'taeg-ou-taux-debiteur',
    category: 'comprendre',
    title: 'JKP of debetrente: een aanbod lezen zonder u te vergissen',
    excerpt:
      'Twee tarieven, twee gebruiken. Het verschil begrijpen voorkomt nare verrassingen bij het vergelijken.',
    author: TEAM,
    date: '2026-07-22',
    readingMinutes: 4,
    body: [
      {
        heading: 'De debetrente',
        paragraphs: [
          'Het is het nominale tarief dat dient om de rente te berekenen. Op zich zegt het niets over de werkelijke kost van het krediet.',
        ],
      },
      {
        heading: 'Het JKP',
        paragraphs: [
          'Het jaarlijkse kostenpercentage omvat de kosten en de eventuele verzekering. Dat is wat u van aanbod tot aanbod moet vergelijken; het ligt logischerwijs hoger dan de debetrente.',
        ],
      },
      {
        heading: 'In de praktijk',
        paragraphs: [
          'Vergelijk altijd JKP’s onderling, bij eenzelfde bedrag en eenzelfde looptijd. Een lage debetrente met hoge kosten kan duurder uitvallen dan een minder aantrekkelijk ogend aanbod.',
        ],
      },
    ],
  },
  {
    slug: 'co-emprunteur-ou-caution',
    category: 'garanties',
    title: 'Medekredietnemer of borg: wat versterkt uw dossier?',
    excerpt:
      'Beide stellen de kredietgever gerust, maar verbinden niet op dezelfde manier. Hoe kiezen volgens uw situatie.',
    author: TEAM,
    date: '2026-07-30',
    readingMinutes: 5,
    body: [
      {
        heading: 'De medekredietnemer',
        paragraphs: [
          'Hij leent met u: zijn inkomsten komen bij die van u en hij is in gelijke mate verbonden. Vaak is dat de meest doeltreffende hefboom voor een zwak dossier.',
        ],
      },
      {
        heading: 'De borg',
        paragraphs: [
          'Hij verbindt zich te betalen als u het niet doet, zonder mede-titularis van de lening te zijn. Nuttig wanneer een naaste wil helpen zonder mee te lenen.',
        ],
      },
      {
        heading: 'Hoe kiezen',
        paragraphs: [
          'Een medekredietnemer versterkt de aflossingscapaciteit; een borg beveiligt de terugbetaling. De juiste keuze hangt af van wie u begeleidt en waartoe de persoon zich wil verbinden.',
        ],
      },
    ],
  },
  {
    slug: 'dossier-independant-sans-bilans',
    category: 'profils',
    title: 'Zelfstandige: een solide dossier zonder drie jaarrekeningen',
    excerpt:
      'Een recente activiteit of atypische rekeningen veroordelen uw aanvraag niet. Wat het ontbreken van drie jaarrekeningen compenseert.',
    author: TEAM,
    date: '2026-08-01',
    readingMinutes: 6,
    body: [
      {
        heading: 'Waar de kredietgever naar kijkt',
        paragraphs: [
          'Naast de jaarrekeningen wegen de regelmaat van de ontvangsten, de liquiditeit en de samenhang van de activiteit zwaar. Regelmatige zakelijke afschriften vertellen een geloofwaardig verhaal.',
        ],
      },
      {
        heading: 'Een recente activiteit compenseren',
        paragraphs: [
          'Een inbreng, een zekerheid, een medekredietnemer in loondienst of een gedocumenteerd orderboek kunnen geruststellen waar anciënniteit ontbreekt.',
        ],
      },
      {
        heading: 'De juiste bewijsstukken voorbereiden',
        paragraphs: [
          'Bijgewerkte tussentijdse cijfers, afschriften van de jongste maanden, lopende contracten: een geordend dossier versnelt de beoordeling en wekt vertrouwen.',
        ],
      },
    ],
  },
  {
    slug: 'emprunter-apres-60-ans',
    category: 'profils',
    title: 'Lenen na 60: wat echt telt',
    excerpt:
      'Leeftijd verbiedt krediet niet. Looptijd, verzekering en zekerheden worden gewoon anders bekeken.',
    author: TEAM,
    date: '2026-08-02',
    readingMinutes: 5,
    body: [
      {
        heading: 'Vaak stabiele inkomsten',
        paragraphs: [
          'Een pensioen is een regelmatig en voorspelbaar inkomen, gewaardeerd door kredietgevers. De vraag is niet de leeftijd op zich, maar de looptijd van de lening in verhouding daartoe.',
        ],
      },
      {
        heading: 'De kwestie van de verzekering',
        paragraphs: [
          'De schuldsaldoverzekering kan met de leeftijd meer kosten, maar ze is facultatief en er bestaan oplossingen, vooral door te steunen op een echte zekerheid.',
        ],
      },
      {
        heading: 'Steunen op uw vermogen',
        paragraphs: [
          'Een woning maakt een herfinanciering of een hypothecaire lening mogelijk, waarbij de zekerheid meer telt dan de leeftijd.',
        ],
      },
    ],
  },
  {
    slug: 'financer-un-projet-avec-cdd-interim',
    category: 'profils',
    title: 'Tijdelijk contract, uitzendwerk: een project financieren met een kort contract',
    excerpt:
      'Een kort contract verzwakt het dossier, zonder het onmogelijk te maken. De elementen die de balans doen doorslaan.',
    author: TEAM,
    date: '2026-08-03',
    readingMinutes: 5,
    body: [
      {
        heading: 'Regelmaat primeert',
        paragraphs: [
          'Drie jaar ononderbroken uitzendwerk in dezelfde sector wegen vaak zwaarder dan een recent vast contract. De continuïteit van de inkomsten stelt meer gerust dan het etiket van het contract.',
        ],
      },
      {
        heading: 'Het dossier versterken',
        paragraphs: [
          'Een medekredietnemer met een vast contract, een inbreng of regelmatig sparen compenseren de gepercipieerde onzekerheid van een kort contract.',
        ],
      },
      {
        heading: 'De juiste looptijd kiezen',
        paragraphs: [
          'Een afgemeten looptijd en een voorzichtige termijn tonen dat het project stand houdt, ook al variëren de inkomsten van maand tot maand.',
        ],
      },
    ],
  },
  {
    slug: 'apport-personnel-role',
    category: 'comprendre',
    title: 'De eigen inbreng: hoeveel, waarom, wanneer zonder',
    excerpt:
      'De inbreng is niet altijd verplicht, maar verandert vaak de situatie. Wat ze brengt, voorbij het bedrag.',
    author: TEAM,
    date: '2026-08-03',
    readingMinutes: 5,
    body: [
      {
        heading: 'Wat een inbreng verraadt',
        paragraphs: [
          'Naast het verlagen van het geleende bedrag getuigt de inbreng van een spaarvermogen. Het is een signaal van ernst voor de kredietgever.',
        ],
      },
      {
        heading: 'Hoeveel nastreven',
        paragraphs: [
          'Er is geen enkele regel; een inbreng, ook bescheiden, verbetert het dossier en het tarief. Bij sommige projecten dekt ze de bijkomende kosten.',
        ],
      },
      {
        heading: 'Wanneer zonder',
        paragraphs: [
          'Zonder inbreng kunnen een solide zekerheid of regelmatige inkomsten volstaan. Het ontbreken van een inbreng is geen uitsluiting, het wordt gecompenseerd.',
        ],
      },
    ],
  },
  {
    slug: 'rachat-ou-nouveau-credit',
    category: 'rachat',
    title: 'Herfinanciering of nieuwe lening: hoe kiezen',
    excerpt:
      'Het bestaande samenvoegen of een lening toevoegen? De juiste optie hangt af van uw budget en uw project.',
    author: TEAM,
    date: '2026-08-04',
    readingMinutes: 5,
    body: [
      {
        heading: 'Wanneer herfinanciering zinvol is',
        paragraphs: [
          'Als meerdere leningen op uw budget wegen, verlaagt ze samenvoegen de totale termijn en schept ze ademruimte, zij het door de looptijd te verlengen.',
        ],
      },
      {
        heading: 'Wanneer een nieuwe lening volstaat',
        paragraphs: [
          'Voor een eenmalig project en een al gezond budget is een specifieke lening vaak eenvoudiger en goedkoper dan een herfinanciering.',
        ],
      },
      {
        heading: 'De juiste reflex',
        paragraphs: [
          'Vergelijk de totale kost in beide scenario’s, niet alleen de termijn. De voorafgaande inschatting oriënteert u naar de realistische optie voor uw situatie.',
        ],
      },
    ],
  },
  {
    slug: 'assurance-emprunteur-facultative',
    category: 'comprendre',
    title: 'Schuldsaldoverzekering: facultatief, maar nuttig?',
    excerpt:
      'Vaak facultatief, soms waardevol. Begrijpen wat ze dekt om met kennis van zaken te beslissen.',
    author: TEAM,
    date: '2026-08-04',
    readingMinutes: 6,
    body: [
      {
        heading: 'Wat ze dekt',
        paragraphs: [
          'De schuldsaldoverzekering neemt de terugbetaling over bij overlijden, invaliditeit of, naargelang het contract, banenverlies. Ze beschermt zowel uw naasten als de kredietgever.',
        ],
      },
      {
        heading: 'Facultatief, maar af te wegen',
        paragraphs: [
          'Ze is niet altijd verplicht, maar ervan afzien verlegt het risico naar u en uw naasten. De juiste afweging hangt af van uw gezinssituatie en de looptijd van de lening.',
        ],
      },
      {
        heading: 'De concurrentie laten spelen',
        paragraphs: [
          'U bent niet verplicht de verzekering van de kredietgever te nemen: de vrije keuze biedt vaak een gelijkwaardige dekking tegen een betere prijs.',
        ],
      },
    ],
  },
  {
    slug: 'preparer-son-dossier-documents',
    category: 'comprendre',
    title: 'Uw dossier voorbereiden: de documenten die het verschil maken',
    excerpt:
      'Een volledig en geordend dossier versnelt de beoordeling en wekt vertrouwen. De nuttige lijst, zonder overbodigs.',
    author: TEAM,
    date: '2026-08-05',
    readingMinutes: 4,
    body: [
      {
        heading: 'Identiteit en woonplaats',
        paragraphs: [
          'Geldig identiteitsbewijs en recent bewijs van woonplaats: de basis, van bij het begin bij de hand te houden.',
        ],
      },
      {
        heading: 'De inkomsten en de lasten',
        paragraphs: [
          'Loonfiches of jaarrekeningen, laatste belastingaanslag, rekeningafschriften: ze tonen de regelmaat van uw inkomsten en de realiteit van uw lasten.',
        ],
      },
      {
        heading: 'De bewijsstukken van het project',
        paragraphs: [
          'Offerte, verkoopcompromis, bestelbon: een gedocumenteerd project wordt sneller behandeld en beter verdedigd.',
        ],
      },
    ],
  },
];
