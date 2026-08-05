import type { Article } from './types';

const TEAM = 'La rédaction';

export const fr: Article[] = [
  {
    slug: 'comprendre-inscription-ficp',
    category: 'fichage',
    title: 'Fiché FICP : ce que cela change vraiment pour un crédit',
    excerpt:
      "Être inscrit au FICP ne ferme pas toutes les portes. Ce que l'inscription bloque, ce qu'elle n'empêche pas, et comment avancer.",
    author: TEAM,
    date: '2026-06-15',
    readingMinutes: 6,
    body: [
      {
        heading: "Ce qu'est le FICP",
        paragraphs: [
          "Le Fichier national des Incidents de remboursement des Crédits aux Particuliers recense les incidents de paiement caractérisés. Y figurer signale un impayé passé, ce n'est pas une interdiction d'emprunter.",
          "L'inscription est temporaire : elle est levée à la régularisation de l'incident, ou au terme d'une durée maximale.",
        ],
      },
      {
        heading: "Ce que l'inscription bloque",
        paragraphs: [
          "Tant que vous êtes inscrit, le crédit classique accordé sur simple score vous sera presque toujours refusé : les banques de réseau consultent le fichier et s'arrêtent là.",
        ],
      },
      {
        heading: 'Ce qui reste possible',
        paragraphs: [
          "Un financement adossé à une garantie réelle — un bien immobilier, par exemple — peut être étudié malgré l'inscription, parce que la décision ne repose plus seulement sur le score.",
          "Avant tout, vérifiez votre situation auprès de la Banque de France : le droit d'accès est gratuit.",
        ],
      },
    ],
  },
  {
    slug: 'rachat-credit-hypothecaire-guide',
    category: 'rachat',
    title: 'Rachat hypothécaire : quand votre bien devient une solution',
    excerpt:
      "Regrouper ses crédits en s'appuyant sur son bien : pour qui c'est pertinent, ce que ça change sur la mensualité, et les limites.",
    author: TEAM,
    date: '2026-07-02',
    readingMinutes: 8,
    body: [
      {
        heading: 'Le principe',
        paragraphs: [
          "Le rachat hypothécaire réunit vos crédits en cours en un seul prêt, garanti par votre bien immobilier. La mensualité baisse, la durée s'allonge, le coût total augmente : c'est un arbitrage, pas un miracle.",
        ],
      },
      {
        heading: "Pour qui c'est pertinent",
        paragraphs: [
          "Un propriétaire dont le budget est tendu par plusieurs crédits, ou dont le score bloque l'accès au crédit classique. La garantie prend le relais du score.",
        ],
      },
      {
        heading: 'Les limites à connaître',
        paragraphs: [
          "Allonger la durée augmente le coût total : à ne faire que si la baisse de mensualité est réellement nécessaire.",
          'Le bien sert de garantie : un défaut de remboursement peut mener à sa saisie. La décision se prend en connaissance de cause.',
        ],
      },
    ],
  },
  {
    slug: 'taux-endettement-35-pourcent',
    category: 'budget',
    title: "Taux d'endettement : pourquoi 35 % n'est pas un mur",
    excerpt:
      "Le seuil de 35 % est un repère prudentiel, pas une règle absolue. Comment il se calcule et ce qui peut le nuancer.",
    author: TEAM,
    date: '2026-07-12',
    readingMinutes: 5,
    body: [
      {
        heading: 'Comment il se calcule',
        paragraphs: [
          "Le taux d'endettement rapporte vos charges de crédit à vos revenus. On divise l'ensemble de vos mensualités, future comprise, par vos revenus nets, puis on exprime le résultat en pourcentage.",
        ],
      },
      {
        heading: 'Un repère, pas un couperet',
        paragraphs: [
          "Le seuil de 35 % encadre le risque, mais le « reste à vivre » compte tout autant : à revenus élevés, dépasser légèrement le seuil peut rester soutenable.",
        ],
      },
      {
        heading: 'Le faire baisser',
        paragraphs: [
          "Regrouper des crédits, allonger une durée, apporter une somme ou solder un petit prêt : plusieurs leviers ramènent le taux dans une zone confortable.",
        ],
      },
    ],
  },
  {
    slug: 'taeg-ou-taux-debiteur',
    category: 'comprendre',
    title: 'TAEG ou taux débiteur : lire une offre sans se tromper',
    excerpt:
      'Deux taux, deux usages. Comprendre la différence évite les mauvaises surprises au moment de comparer.',
    author: TEAM,
    date: '2026-07-22',
    readingMinutes: 4,
    body: [
      {
        heading: 'Le taux débiteur',
        paragraphs: [
          "C'est le taux nominal qui sert à calculer les intérêts. Seul, il ne dit pas le coût réel du crédit.",
        ],
      },
      {
        heading: 'Le TAEG',
        paragraphs: [
          "Le Taux Annuel Effectif Global intègre les frais et l'assurance éventuelle. C'est lui qu'il faut comparer d'une offre à l'autre ; il est logiquement supérieur au taux débiteur.",
        ],
      },
      {
        heading: 'En pratique',
        paragraphs: [
          "Comparez toujours des TAEG entre eux, sur un même montant et une même durée. Un taux débiteur bas assorti de frais élevés peut coûter plus cher qu'une offre à l'affichage moins flatteur.",
        ],
      },
    ],
  },
  {
    slug: 'co-emprunteur-ou-caution',
    category: 'garanties',
    title: 'Co-emprunteur ou caution : lequel renforce votre dossier ?',
    excerpt:
      "Les deux rassurent le prêteur, mais n'engagent pas de la même façon. Comment choisir selon votre situation.",
    author: TEAM,
    date: '2026-07-30',
    readingMinutes: 5,
    body: [
      {
        heading: 'Le co-emprunteur',
        paragraphs: [
          "Il emprunte avec vous : ses revenus s'ajoutent aux vôtres et il est engagé au même titre. C'est souvent le levier le plus efficace pour un dossier fragile.",
        ],
      },
      {
        heading: 'La caution',
        paragraphs: [
          "Elle s'engage à payer si vous ne le faites pas, sans être co-titulaire du prêt. Utile quand un proche veut aider sans co-emprunter.",
        ],
      },
      {
        heading: 'Comment choisir',
        paragraphs: [
          "Un co-emprunteur renforce la capacité de remboursement ; une caution sécurise le remboursement. Le bon choix dépend de qui vous accompagne et de ce que la personne accepte d'engager.",
        ],
      },
    ],
  },
  {
    slug: 'dossier-independant-sans-bilans',
    category: 'profils',
    title: 'Indépendant : un dossier solide sans trois bilans',
    excerpt:
      "Activité récente ou comptes atypiques ne condamnent pas votre demande. Ce qui compense l'absence de trois bilans.",
    author: TEAM,
    date: '2026-08-01',
    readingMinutes: 6,
    body: [
      {
        heading: 'Ce que regarde le prêteur',
        paragraphs: [
          "Au-delà des bilans, la régularité des encaissements, la trésorerie et la cohérence de l'activité pèsent lourd. Des relevés professionnels réguliers racontent une histoire crédible.",
        ],
      },
      {
        heading: 'Compenser une activité récente',
        paragraphs: [
          "Un apport, une garantie, un co-emprunteur salarié ou un carnet de commandes documenté peuvent rassurer là où l'ancienneté manque.",
        ],
      },
      {
        heading: 'Préparer les bons justificatifs',
        paragraphs: [
          "Situation comptable à jour, relevés des derniers mois, contrats en cours : un dossier ordonné accélère l'étude et inspire confiance.",
        ],
      },
    ],
  },
  {
    slug: 'emprunter-apres-60-ans',
    category: 'profils',
    title: 'Emprunter après 60 ans : ce qui compte vraiment',
    excerpt:
      "L'âge n'interdit pas le crédit. Durée, assurance et garanties se pensent simplement autrement.",
    author: TEAM,
    date: '2026-08-02',
    readingMinutes: 5,
    body: [
      {
        heading: 'Des revenus souvent stables',
        paragraphs: [
          "Une pension est un revenu régulier et prévisible, apprécié des prêteurs. La question n'est pas l'âge en soi, mais la durée du prêt au regard de celui-ci.",
        ],
      },
      {
        heading: "La question de l'assurance",
        paragraphs: [
          "L'assurance emprunteur peut coûter davantage avec l'âge, mais elle est facultative et des solutions existent, notamment en s'appuyant sur une garantie réelle.",
        ],
      },
      {
        heading: "S'appuyer sur son patrimoine",
        paragraphs: [
          "Un bien immobilier permet d'envisager un rachat ou un prêt hypothécaire, où la garantie compte davantage que l'âge.",
        ],
      },
    ],
  },
  {
    slug: 'financer-un-projet-avec-cdd-interim',
    category: 'profils',
    title: 'CDD, intérim : financer un projet avec un contrat court',
    excerpt:
      "Un contrat court fragilise le dossier, sans le rendre impossible. Les éléments qui font pencher la balance.",
    author: TEAM,
    date: '2026-08-03',
    readingMinutes: 5,
    body: [
      {
        heading: 'La régularité prime',
        paragraphs: [
          "Trois ans d'intérim continu dans la même branche pèsent souvent plus qu'un CDI récent. La continuité des revenus rassure davantage que l'étiquette du contrat.",
        ],
      },
      {
        heading: 'Renforcer le dossier',
        paragraphs: [
          "Un co-emprunteur en CDI, un apport ou une épargne régulière compensent l'incertitude perçue d'un contrat court.",
        ],
      },
      {
        heading: 'Choisir la bonne durée',
        paragraphs: [
          "Une durée mesurée et une mensualité prudente montrent que le projet tient, même si les revenus varient d'un mois à l'autre.",
        ],
      },
    ],
  },
  {
    slug: 'apport-personnel-role',
    category: 'comprendre',
    title: "L'apport personnel : combien, pourquoi, quand s'en passer",
    excerpt:
      "L'apport n'est pas toujours obligatoire, mais il change souvent la donne. Ce qu'il apporte, au-delà du montant.",
    author: TEAM,
    date: '2026-08-03',
    readingMinutes: 5,
    body: [
      {
        heading: 'Ce que révèle un apport',
        paragraphs: [
          "Au-delà de réduire le montant emprunté, l'apport témoigne d'une capacité à épargner. C'est un signal de sérieux pour le prêteur.",
        ],
      },
      {
        heading: 'Combien viser',
        paragraphs: [
          "Il n'y a pas de règle unique ; un apport, même modeste, améliore le dossier et le taux. Sur certains projets, il couvre les frais annexes.",
        ],
      },
      {
        heading: "Quand s'en passer",
        paragraphs: [
          "Sans apport, une garantie solide ou des revenus réguliers peuvent suffire. L'absence d'apport n'est pas rédhibitoire, elle se compense.",
        ],
      },
    ],
  },
  {
    slug: 'rachat-ou-nouveau-credit',
    category: 'rachat',
    title: 'Rachat de crédit ou nouveau prêt : comment choisir',
    excerpt:
      "Regrouper l'existant ou ajouter un prêt ? La bonne option dépend de votre budget et de votre projet.",
    author: TEAM,
    date: '2026-08-04',
    readingMinutes: 5,
    body: [
      {
        heading: 'Quand le rachat a du sens',
        paragraphs: [
          "Si plusieurs crédits pèsent sur votre budget, les regrouper réduit la mensualité globale et remet de l'air, quitte à allonger la durée.",
        ],
      },
      {
        heading: 'Quand un nouveau prêt suffit',
        paragraphs: [
          "Pour un projet ponctuel et un budget déjà sain, un prêt dédié est souvent plus simple et moins coûteux qu'un rachat.",
        ],
      },
      {
        heading: 'Le bon réflexe',
        paragraphs: [
          "Comparez le coût total dans les deux scénarios, pas seulement la mensualité. Le pré-diagnostic vous oriente vers l'option réaliste pour votre situation.",
        ],
      },
    ],
  },
  {
    slug: 'assurance-emprunteur-facultative',
    category: 'comprendre',
    title: 'Assurance emprunteur : facultative, mais utile ?',
    excerpt:
      "Souvent facultative, parfois précieuse. Comprendre ce qu'elle couvre pour décider en connaissance de cause.",
    author: TEAM,
    date: '2026-08-04',
    readingMinutes: 6,
    body: [
      {
        heading: "Ce qu'elle couvre",
        paragraphs: [
          "L'assurance emprunteur prend le relais du remboursement en cas de décès, d'invalidité ou, selon les contrats, de perte d'emploi. Elle protège autant vos proches que le prêteur.",
        ],
      },
      {
        heading: 'Facultative, mais à peser',
        paragraphs: [
          "Elle n'est pas toujours obligatoire, mais s'en passer transfère le risque sur vous et vos proches. Le bon arbitrage dépend de votre situation familiale et de la durée du prêt.",
        ],
      },
      {
        heading: 'Faire jouer la concurrence',
        paragraphs: [
          "Vous n'êtes pas tenu de prendre l'assurance du prêteur : la délégation permet souvent une couverture équivalente à meilleur prix.",
        ],
      },
    ],
  },
  {
    slug: 'preparer-son-dossier-documents',
    category: 'comprendre',
    title: 'Préparer son dossier : les documents qui font la différence',
    excerpt:
      "Un dossier complet et ordonné accélère l'étude et inspire confiance. La liste utile, sans superflu.",
    author: TEAM,
    date: '2026-08-05',
    readingMinutes: 4,
    body: [
      {
        heading: "L'identité et le domicile",
        paragraphs: [
          "Pièce d'identité en cours de validité et justificatif de domicile récent : la base, à avoir sous la main dès le départ.",
        ],
      },
      {
        heading: 'Les revenus et les charges',
        paragraphs: [
          "Bulletins de salaire ou bilans, dernier avis d'imposition, relevés de compte : ils montrent la régularité de vos revenus et la réalité de vos charges.",
        ],
      },
      {
        heading: 'Les justificatifs du projet',
        paragraphs: [
          "Devis, compromis, bon de commande : un projet documenté se traite plus vite et se défend mieux.",
        ],
      },
    ],
  },
];
