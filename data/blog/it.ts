import type { Article } from './types';

const TEAM = 'La redazione';

export const it: Article[] = [
  {
    slug: 'comprendre-inscription-ficp',
    category: 'fichage',
    title: 'Segnalato in una centrale rischi: cosa cambia davvero per un prestito',
    excerpt:
      "Essere segnalati in una centrale rischi non chiude tutte le porte. Cosa blocca la segnalazione, cosa non impedisce e come andare avanti.",
    author: TEAM,
    date: '2026-06-15',
    readingMinutes: 6,
    body: [
      {
        heading: "Che cos'è la segnalazione",
        paragraphs: [
          'Le centrali rischi registrano gli incidenti di pagamento caratterizzati. Comparirvi segnala un mancato pagamento passato: non è un divieto di prendere in prestito.',
          'La segnalazione è temporanea: viene rimossa alla regolarizzazione dell’incidente, oppure al termine di un periodo massimo.',
        ],
      },
      {
        heading: 'Cosa blocca la segnalazione',
        paragraphs: [
          'Finché sei segnalato, il credito classico concesso su semplice punteggio ti verrà quasi sempre rifiutato: le banche tradizionali consultano gli archivi e si fermano lì.',
        ],
      },
      {
        heading: 'Cosa resta possibile',
        paragraphs: [
          'Un finanziamento garantito da una garanzia reale — un immobile, per esempio — può essere valutato nonostante la segnalazione, perché la decisione non si basa più soltanto sul punteggio.',
          'Prima di tutto, verifica la tua situazione presso le centrali rischi (Banca d’Italia, CRIF): il diritto di accesso ai propri dati è gratuito.',
        ],
      },
    ],
  },
  {
    slug: 'rachat-credit-hypothecaire-guide',
    category: 'rachat',
    title: 'Consolidamento ipotecario: quando il tuo immobile diventa una soluzione',
    excerpt:
      "Unire i propri prestiti facendo leva sull’immobile: per chi ha senso, cosa cambia sulla rata e i limiti.",
    author: TEAM,
    date: '2026-07-02',
    readingMinutes: 8,
    body: [
      {
        heading: 'Il principio',
        paragraphs: [
          "Il consolidamento ipotecario riunisce i tuoi prestiti in corso in un unico finanziamento, garantito dal tuo immobile. La rata scende, la durata si allunga, il costo totale aumenta: è un compromesso, non un miracolo.",
        ],
      },
      {
        heading: 'Per chi ha senso',
        paragraphs: [
          'Un proprietario il cui budget è teso da più prestiti, o il cui punteggio blocca l’accesso al credito classico. La garanzia prende il posto del punteggio.',
        ],
      },
      {
        heading: 'I limiti da conoscere',
        paragraphs: [
          "Allungare la durata aumenta il costo totale: da fare solo se la riduzione della rata è realmente necessaria.",
          'Il bene funge da garanzia: un mancato rimborso può portare al suo pignoramento. La decisione si prende con piena consapevolezza.',
        ],
      },
    ],
  },
  {
    slug: 'taux-endettement-35-pourcent',
    category: 'budget',
    title: 'Rapporto rata/reddito: perché il 35% non è un muro',
    excerpt:
      'La soglia del 35% è un riferimento prudenziale, non una regola assoluta. Come si calcola e cosa può attenuarla.',
    author: TEAM,
    date: '2026-07-12',
    readingMinutes: 5,
    body: [
      {
        heading: 'Come si calcola',
        paragraphs: [
          "Il rapporto rata/reddito confronta i tuoi oneri di credito con i tuoi redditi. Si dividono tutte le rate, inclusa quella futura, per il reddito netto, poi si esprime il risultato in percentuale.",
        ],
      },
      {
        heading: 'Un riferimento, non una ghigliottina',
        paragraphs: [
          "La soglia del 35% inquadra il rischio, ma anche il «reddito residuo» conta altrettanto: con redditi elevati, superare leggermente la soglia può restare sostenibile.",
        ],
      },
      {
        heading: 'Come abbassarlo',
        paragraphs: [
          "Consolidare prestiti, allungare una durata, versare una somma o estinguere un piccolo prestito: diverse leve riportano il rapporto in una zona confortevole.",
        ],
      },
    ],
  },
  {
    slug: 'taeg-ou-taux-debiteur',
    category: 'comprendre',
    title: 'TAEG o tasso debitore: leggere un’offerta senza sbagliare',
    excerpt:
      'Due tassi, due usi. Capire la differenza evita brutte sorprese al momento del confronto.',
    author: TEAM,
    date: '2026-07-22',
    readingMinutes: 4,
    body: [
      {
        heading: 'Il tasso debitore',
        paragraphs: [
          "È il tasso nominale che serve a calcolare gli interessi. Da solo, non indica il costo reale del credito.",
        ],
      },
      {
        heading: 'Il TAEG',
        paragraphs: [
          "Il Tasso Annuo Effettivo Globale integra le spese e l’eventuale assicurazione. È questo che va confrontato da un’offerta all’altra; è logicamente superiore al tasso debitore.",
        ],
      },
      {
        heading: 'In pratica',
        paragraphs: [
          "Confronta sempre i TAEG tra loro, sullo stesso importo e sulla stessa durata. Un tasso debitore basso accompagnato da spese elevate può costare più di un’offerta dall’aspetto meno allettante.",
        ],
      },
    ],
  },
  {
    slug: 'co-emprunteur-ou-caution',
    category: 'garanties',
    title: 'Co-intestatario o garante: quale rafforza la tua pratica?',
    excerpt:
      "Entrambi rassicurano il finanziatore, ma non impegnano allo stesso modo. Come scegliere in base alla tua situazione.",
    author: TEAM,
    date: '2026-07-30',
    readingMinutes: 5,
    body: [
      {
        heading: 'Il co-intestatario',
        paragraphs: [
          "Prende in prestito con te: i suoi redditi si sommano ai tuoi ed è impegnato allo stesso titolo. È spesso la leva più efficace per una pratica fragile.",
        ],
      },
      {
        heading: 'Il garante',
        paragraphs: [
          "Si impegna a pagare se non lo fai tu, senza essere co-titolare del prestito. Utile quando una persona vicina vuole aiutare senza co-intestare.",
        ],
      },
      {
        heading: 'Come scegliere',
        paragraphs: [
          "Un co-intestatario rafforza la capacità di rimborso; un garante mette in sicurezza il rimborso. La scelta giusta dipende da chi ti accompagna e da ciò che la persona accetta di impegnare.",
        ],
      },
    ],
  },
  {
    slug: 'dossier-independant-sans-bilans',
    category: 'profils',
    title: 'Autonomo: una pratica solida senza tre bilanci',
    excerpt:
      "Un’attività recente o conti atipici non condannano la tua richiesta. Ciò che compensa l’assenza di tre bilanci.",
    author: TEAM,
    date: '2026-08-01',
    readingMinutes: 6,
    body: [
      {
        heading: 'Cosa guarda il finanziatore',
        paragraphs: [
          "Oltre ai bilanci, la regolarità degli incassi, la liquidità e la coerenza dell’attività pesano molto. Estratti conto aziendali regolari raccontano una storia credibile.",
        ],
      },
      {
        heading: 'Compensare un’attività recente',
        paragraphs: [
          "Un apporto, una garanzia, un co-intestatario dipendente o un portafoglio ordini documentato possono rassicurare dove manca l’anzianità.",
        ],
      },
      {
        heading: 'Preparare i giustificativi giusti',
        paragraphs: [
          "Situazione contabile aggiornata, estratti conto degli ultimi mesi, contratti in corso: una pratica ordinata accelera l’analisi e ispira fiducia.",
        ],
      },
    ],
  },
  {
    slug: 'emprunter-apres-60-ans',
    category: 'profils',
    title: 'Prendere un prestito dopo i 60 anni: cosa conta davvero',
    excerpt:
      "L’età non vieta il credito. Durata, assicurazione e garanzie si pensano semplicemente in modo diverso.",
    author: TEAM,
    date: '2026-08-02',
    readingMinutes: 5,
    body: [
      {
        heading: 'Redditi spesso stabili',
        paragraphs: [
          "Una pensione è un reddito regolare e prevedibile, apprezzato dai finanziatori. La questione non è l’età in sé, ma la durata del prestito rispetto a essa.",
        ],
      },
      {
        heading: 'La questione dell’assicurazione',
        paragraphs: [
          "L’assicurazione sul credito può costare di più con l’età, ma è facoltativa ed esistono soluzioni, in particolare facendo leva su una garanzia reale.",
        ],
      },
      {
        heading: 'Far leva sul proprio patrimonio',
        paragraphs: [
          "Un immobile permette di valutare un consolidamento o un prestito ipotecario, dove la garanzia conta più dell’età.",
        ],
      },
    ],
  },
  {
    slug: 'financer-un-projet-avec-cdd-interim',
    category: 'profils',
    title: 'Contratto a termine, interinale: finanziare un progetto con un contratto breve',
    excerpt:
      "Un contratto breve indebolisce la pratica, senza renderla impossibile. Gli elementi che fanno pendere la bilancia.",
    author: TEAM,
    date: '2026-08-03',
    readingMinutes: 5,
    body: [
      {
        heading: 'La regolarità conta di più',
        paragraphs: [
          "Tre anni di lavoro interinale continuo nello stesso settore pesano spesso più di un contratto a tempo indeterminato recente. La continuità dei redditi rassicura più dell’etichetta del contratto.",
        ],
      },
      {
        heading: 'Rafforzare la pratica',
        paragraphs: [
          "Un co-intestatario a tempo indeterminato, un apporto o un risparmio regolare compensano l’incertezza percepita di un contratto breve.",
        ],
      },
      {
        heading: 'Scegliere la durata giusta',
        paragraphs: [
          "Una durata misurata e una rata prudente mostrano che il progetto regge, anche se i redditi variano da un mese all’altro.",
        ],
      },
    ],
  },
  {
    slug: 'apport-personnel-role',
    category: 'comprendre',
    title: "L’apporto personale: quanto, perché, quando farne a meno",
    excerpt:
      "L’apporto non è sempre obbligatorio, ma spesso cambia le carte in tavola. Cosa apporta, oltre all’importo.",
    author: TEAM,
    date: '2026-08-03',
    readingMinutes: 5,
    body: [
      {
        heading: 'Cosa rivela un apporto',
        paragraphs: [
          "Oltre a ridurre l’importo preso in prestito, l’apporto dimostra una capacità di risparmio. È un segnale di serietà per il finanziatore.",
        ],
      },
      {
        heading: 'Quanto puntare',
        paragraphs: [
          "Non esiste una regola unica; un apporto, anche modesto, migliora la pratica e il tasso. Su alcuni progetti, copre le spese accessorie.",
        ],
      },
      {
        heading: 'Quando farne a meno',
        paragraphs: [
          "Senza apporto, una garanzia solida o redditi regolari possono bastare. L’assenza di apporto non è preclusiva, si compensa.",
        ],
      },
    ],
  },
  {
    slug: 'rachat-ou-nouveau-credit',
    category: 'rachat',
    title: 'Consolidamento debiti o nuovo prestito: come scegliere',
    excerpt:
      "Unire l’esistente o aggiungere un prestito? L’opzione giusta dipende dal tuo budget e dal tuo progetto.",
    author: TEAM,
    date: '2026-08-04',
    readingMinutes: 5,
    body: [
      {
        heading: 'Quando il consolidamento ha senso',
        paragraphs: [
          "Se più prestiti pesano sul tuo budget, unirli riduce la rata complessiva e dà respiro, anche a costo di allungare la durata.",
        ],
      },
      {
        heading: 'Quando basta un nuovo prestito',
        paragraphs: [
          "Per un progetto puntuale e un budget già sano, un prestito dedicato è spesso più semplice e meno costoso di un consolidamento.",
        ],
      },
      {
        heading: 'L’approccio giusto',
        paragraphs: [
          "Confronta il costo totale nei due scenari, non solo la rata. La verifica di idoneità ti orienta verso l’opzione realistica per la tua situazione.",
        ],
      },
    ],
  },
  {
    slug: 'assurance-emprunteur-facultative',
    category: 'comprendre',
    title: 'Assicurazione sul credito: facoltativa, ma utile?',
    excerpt:
      "Spesso facoltativa, a volte preziosa. Capire cosa copre per decidere con piena consapevolezza.",
    author: TEAM,
    date: '2026-08-04',
    readingMinutes: 6,
    body: [
      {
        heading: 'Cosa copre',
        paragraphs: [
          "L’assicurazione sul credito subentra nel rimborso in caso di decesso, invalidità o, secondo i contratti, perdita del lavoro. Protegge tanto i tuoi cari quanto il finanziatore.",
        ],
      },
      {
        heading: 'Facoltativa, ma da valutare',
        paragraphs: [
          "Non è sempre obbligatoria, ma farne a meno trasferisce il rischio su di te e sui tuoi cari. La scelta giusta dipende dalla tua situazione familiare e dalla durata del prestito.",
        ],
      },
      {
        heading: 'Mettere in concorrenza',
        paragraphs: [
          "Non sei tenuto a prendere l’assicurazione del finanziatore: la delega permette spesso una copertura equivalente a un prezzo migliore.",
        ],
      },
    ],
  },
  {
    slug: 'preparer-son-dossier-documents',
    category: 'comprendre',
    title: 'Preparare la pratica: i documenti che fanno la differenza',
    excerpt:
      "Una pratica completa e ordinata accelera l’analisi e ispira fiducia. La lista utile, senza superfluo.",
    author: TEAM,
    date: '2026-08-05',
    readingMinutes: 4,
    body: [
      {
        heading: 'Identità e residenza',
        paragraphs: [
          "Documento d’identità in corso di validità e attestazione di residenza recente: la base, da avere a portata di mano fin dall’inizio.",
        ],
      },
      {
        heading: 'Redditi e oneri',
        paragraphs: [
          "Buste paga o bilanci, ultima dichiarazione dei redditi, estratti conto: mostrano la regolarità dei tuoi redditi e la realtà dei tuoi oneri.",
        ],
      },
      {
        heading: 'I giustificativi del progetto',
        paragraphs: [
          "Preventivo, preliminare, ordine d’acquisto: un progetto documentato si tratta più in fretta e si difende meglio.",
        ],
      },
    ],
  },
];
