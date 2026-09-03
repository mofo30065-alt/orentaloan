import type { Article } from './types';

const TEAM = 'Die Redaktion';

export const de: Article[] = [
  {
    slug: 'comprendre-inscription-ficp',
    category: 'fichage',
    title: 'Negativeintrag bei der Auskunftei: Was sich für einen Kredit wirklich ändert',
    excerpt:
      'Ein Negativeintrag verschließt nicht alle Türen. Was der Eintrag blockiert, was er nicht verhindert und wie es weitergeht.',
    author: TEAM,
    date: '2026-06-15',
    readingMinutes: 6,
    body: [
      {
        heading: 'Was der Eintrag ist',
        paragraphs: [
          'Auskunfteien erfassen charakterisierte Zahlungsvorfälle. Darin zu erscheinen weist auf einen vergangenen Zahlungsausfall hin: Es ist kein Kreditverbot.',
          'Der Eintrag ist befristet: Er wird mit der Bereinigung des Vorfalls gelöscht oder nach Ablauf einer Höchstfrist.',
        ],
      },
      {
        heading: 'Was der Eintrag blockiert',
        paragraphs: [
          'Solange Sie eingetragen sind, wird klassischer Kredit auf einfachen Score fast immer abgelehnt: Klassische Banken prüfen die Auskunftei und hören dort auf.',
        ],
      },
      {
        heading: 'Was möglich bleibt',
        paragraphs: [
          'Eine durch eine echte Sicherheit — etwa eine Immobilie — besicherte Finanzierung kann trotz des Eintrags geprüft werden, weil die Entscheidung nicht mehr allein auf dem Score beruht.',
          'Prüfen Sie vor allem Ihre Lage bei der Auskunftei (z. B. SCHUFA): Die Selbstauskunft ist einmal jährlich kostenlos.',
        ],
      },
    ],
  },
  {
    slug: 'rachat-credit-hypothecaire-guide',
    category: 'rachat',
    title: 'Umschuldung mit Grundpfand: Wenn Ihre Immobilie zur Lösung wird',
    excerpt:
      'Kredite zusammenfassen, gestützt auf Ihre Immobilie: für wen es sinnvoll ist, was sich an der Rate ändert und die Grenzen.',
    author: TEAM,
    date: '2026-07-02',
    readingMinutes: 8,
    body: [
      {
        heading: 'Das Prinzip',
        paragraphs: [
          'Die grundpfandbesicherte Umschuldung fasst Ihre laufenden Kredite zu einem einzigen zusammen, besichert durch Ihre Immobilie. Die Rate sinkt, die Laufzeit verlängert sich, die Gesamtkosten steigen: Es ist eine Abwägung, kein Wunder.',
        ],
      },
      {
        heading: 'Für wen es sinnvoll ist',
        paragraphs: [
          'Ein Eigentümer, dessen Budget durch mehrere Kredite angespannt ist oder dessen Score den Zugang zu klassischem Kredit blockiert. Die Sicherheit übernimmt anstelle des Scores.',
        ],
      },
      {
        heading: 'Die Grenzen, die man kennen sollte',
        paragraphs: [
          'Eine längere Laufzeit erhöht die Gesamtkosten: nur tun, wenn die niedrigere Rate wirklich nötig ist.',
          'Die Immobilie dient als Sicherheit: Ein Zahlungsausfall kann zu ihrer Verwertung führen. Die Entscheidung fällt in voller Kenntnis.',
        ],
      },
    ],
  },
  {
    slug: 'taux-endettement-35-pourcent',
    category: 'budget',
    title: 'Schuldenquote: Warum 35 % keine Mauer sind',
    excerpt:
      'Die Schwelle von 35 % ist ein aufsichtsrechtlicher Richtwert, keine absolute Regel. Wie sie sich berechnet und was sie relativieren kann.',
    author: TEAM,
    date: '2026-07-12',
    readingMinutes: 5,
    body: [
      {
        heading: 'Wie sie sich berechnet',
        paragraphs: [
          'Die Schuldenquote setzt Ihre Kreditlasten ins Verhältnis zu Ihrem Einkommen. Man teilt die Summe Ihrer Raten, die künftige eingeschlossen, durch Ihr Nettoeinkommen und drückt das Ergebnis in Prozent aus.',
        ],
      },
      {
        heading: 'Ein Richtwert, keine Guillotine',
        paragraphs: [
          'Die Schwelle von 35 % rahmt das Risiko, doch das „frei Verfügbare“ zählt ebenso: Bei hohem Einkommen kann ein leichtes Überschreiten der Schwelle tragbar bleiben.',
        ],
      },
      {
        heading: 'Sie senken',
        paragraphs: [
          'Kredite zusammenfassen, eine Laufzeit strecken, einen Betrag einbringen oder einen kleinen Kredit ablösen: Mehrere Hebel bringen die Quote in einen komfortablen Bereich zurück.',
        ],
      },
    ],
  },
  {
    slug: 'taeg-ou-taux-debiteur',
    category: 'comprendre',
    title: 'Effektiver Jahreszins oder Sollzins: ein Angebot fehlerfrei lesen',
    excerpt:
      'Zwei Zinssätze, zwei Verwendungen. Den Unterschied zu verstehen erspart böse Überraschungen beim Vergleich.',
    author: TEAM,
    date: '2026-07-22',
    readingMinutes: 4,
    body: [
      {
        heading: 'Der Sollzins',
        paragraphs: [
          'Es ist der Nominalzins, der zur Berechnung der Zinsen dient. Für sich genommen gibt er nicht die tatsächlichen Kosten des Kredits an.',
        ],
      },
      {
        heading: 'Der effektive Jahreszins',
        paragraphs: [
          'Der effektive Jahreszins bezieht Gebühren und eine etwaige Versicherung ein. Ihn gilt es von Angebot zu Angebot zu vergleichen; er liegt logischerweise über dem Sollzins.',
        ],
      },
      {
        heading: 'In der Praxis',
        paragraphs: [
          'Vergleichen Sie stets effektive Jahreszinsen miteinander, bei gleichem Betrag und gleicher Laufzeit. Ein niedriger Sollzins mit hohen Gebühren kann teurer sein als ein weniger verlockend wirkendes Angebot.',
        ],
      },
    ],
  },
  {
    slug: 'co-emprunteur-ou-caution',
    category: 'garanties',
    title: 'Mitkreditnehmer oder Bürge: Was stärkt Ihre Unterlagen?',
    excerpt:
      'Beide beruhigen den Kreditgeber, verpflichten aber nicht auf dieselbe Weise. Wie Sie je nach Lage wählen.',
    author: TEAM,
    date: '2026-07-30',
    readingMinutes: 5,
    body: [
      {
        heading: 'Der Mitkreditnehmer',
        paragraphs: [
          'Er nimmt mit Ihnen auf: Sein Einkommen kommt zu Ihrem hinzu und er haftet gleichermaßen. Oft ist er der wirksamste Hebel für eine schwache Akte.',
        ],
      },
      {
        heading: 'Der Bürge',
        paragraphs: [
          'Er verpflichtet sich zu zahlen, wenn Sie es nicht tun, ohne Mitinhaber des Kredits zu sein. Nützlich, wenn ein Angehöriger helfen möchte, ohne mitzunehmen.',
        ],
      },
      {
        heading: 'Wie wählen',
        paragraphs: [
          'Ein Mitkreditnehmer stärkt die Rückzahlungsfähigkeit; ein Bürge sichert die Rückzahlung. Die richtige Wahl hängt davon ab, wer Sie begleitet und wozu sich die Person verpflichten möchte.',
        ],
      },
    ],
  },
  {
    slug: 'dossier-independant-sans-bilans',
    category: 'profils',
    title: 'Selbstständig: solide Unterlagen ohne drei Jahresabschlüsse',
    excerpt:
      'Eine junge Tätigkeit oder atypische Abschlüsse verurteilen Ihren Antrag nicht. Was das Fehlen von drei Jahresabschlüssen ausgleicht.',
    author: TEAM,
    date: '2026-08-01',
    readingMinutes: 6,
    body: [
      {
        heading: 'Worauf der Kreditgeber achtet',
        paragraphs: [
          'Über die Abschlüsse hinaus wiegen die Regelmäßigkeit der Eingänge, die Liquidität und die Stimmigkeit der Tätigkeit schwer. Regelmäßige Geschäftsauszüge erzählen eine glaubhafte Geschichte.',
        ],
      },
      {
        heading: 'Eine junge Tätigkeit ausgleichen',
        paragraphs: [
          'Eigenkapital, eine Sicherheit, ein angestellter Mitkreditnehmer oder ein belegter Auftragsbestand können beruhigen, wo das Alter fehlt.',
        ],
      },
      {
        heading: 'Die richtigen Nachweise vorbereiten',
        paragraphs: [
          'Aktuelle betriebswirtschaftliche Auswertung, Auszüge der letzten Monate, laufende Verträge: Geordnete Unterlagen beschleunigen die Prüfung und schaffen Vertrauen.',
        ],
      },
    ],
  },
  {
    slug: 'emprunter-apres-60-ans',
    category: 'profils',
    title: 'Kreditaufnahme nach 60: Worauf es wirklich ankommt',
    excerpt:
      'Das Alter verbietet den Kredit nicht. Laufzeit, Versicherung und Sicherheiten denkt man einfach anders.',
    author: TEAM,
    date: '2026-08-02',
    readingMinutes: 5,
    body: [
      {
        heading: 'Oft stabile Einkünfte',
        paragraphs: [
          'Eine Rente ist ein regelmäßiges, planbares Einkommen, von Kreditgebern geschätzt. Die Frage ist nicht das Alter an sich, sondern die Laufzeit des Kredits im Verhältnis dazu.',
        ],
      },
      {
        heading: 'Die Frage der Versicherung',
        paragraphs: [
          'Die Restschuldversicherung kann mit dem Alter mehr kosten, doch sie ist freiwillig und es gibt Lösungen, vor allem gestützt auf eine echte Sicherheit.',
        ],
      },
      {
        heading: 'Auf das Vermögen stützen',
        paragraphs: [
          'Eine Immobilie ermöglicht eine Umschuldung oder einen grundpfandbesicherten Kredit, bei dem die Sicherheit mehr zählt als das Alter.',
        ],
      },
    ],
  },
  {
    slug: 'financer-un-projet-avec-cdd-interim',
    category: 'profils',
    title: 'Befristet, Zeitarbeit: ein Vorhaben mit kurzem Vertrag finanzieren',
    excerpt:
      'Ein kurzer Vertrag schwächt die Unterlagen, macht sie aber nicht unmöglich. Die Elemente, die den Ausschlag geben.',
    author: TEAM,
    date: '2026-08-03',
    readingMinutes: 5,
    body: [
      {
        heading: 'Regelmäßigkeit zählt zuerst',
        paragraphs: [
          'Drei Jahre durchgehende Zeitarbeit in derselben Branche wiegen oft mehr als ein junger unbefristeter Vertrag. Die Kontinuität der Einkünfte beruhigt mehr als das Etikett des Vertrags.',
        ],
      },
      {
        heading: 'Die Unterlagen stärken',
        paragraphs: [
          'Ein unbefristet angestellter Mitkreditnehmer, Eigenkapital oder regelmäßiges Sparen gleichen die wahrgenommene Unsicherheit eines kurzen Vertrags aus.',
        ],
      },
      {
        heading: 'Die richtige Laufzeit wählen',
        paragraphs: [
          'Eine maßvolle Laufzeit und eine vorsichtige Rate zeigen, dass das Vorhaben trägt, auch wenn die Einkünfte von Monat zu Monat schwanken.',
        ],
      },
    ],
  },
  {
    slug: 'apport-personnel-role',
    category: 'comprendre',
    title: 'Das Eigenkapital: wie viel, warum, wann darauf verzichten',
    excerpt:
      'Eigenkapital ist nicht immer Pflicht, ändert aber oft die Ausgangslage. Was es über den Betrag hinaus bringt.',
    author: TEAM,
    date: '2026-08-03',
    readingMinutes: 5,
    body: [
      {
        heading: 'Was Eigenkapital verrät',
        paragraphs: [
          'Über die Senkung des Kreditbetrags hinaus zeugt Eigenkapital von einer Sparfähigkeit. Es ist ein Signal von Ernsthaftigkeit für den Kreditgeber.',
        ],
      },
      {
        heading: 'Wie viel anpeilen',
        paragraphs: [
          'Es gibt keine einheitliche Regel; Eigenkapital, auch bescheiden, verbessert die Unterlagen und den Zins. Bei manchen Vorhaben deckt es die Nebenkosten.',
        ],
      },
      {
        heading: 'Wann darauf verzichten',
        paragraphs: [
          'Ohne Eigenkapital können eine solide Sicherheit oder regelmäßige Einkünfte genügen. Das Fehlen von Eigenkapital ist kein Ausschluss, es lässt sich ausgleichen.',
        ],
      },
    ],
  },
  {
    slug: 'rachat-ou-nouveau-credit',
    category: 'rachat',
    title: 'Umschuldung oder neuer Kredit: wie wählen',
    excerpt:
      'Bestehendes zusammenfassen oder einen Kredit hinzunehmen? Die richtige Option hängt von Ihrem Budget und Ihrem Vorhaben ab.',
    author: TEAM,
    date: '2026-08-04',
    readingMinutes: 5,
    body: [
      {
        heading: 'Wann Umschuldung sinnvoll ist',
        paragraphs: [
          'Wenn mehrere Kredite Ihr Budget belasten, senkt ihr Zusammenfassen die Gesamtrate und schafft Luft, auch wenn die Laufzeit länger wird.',
        ],
      },
      {
        heading: 'Wann ein neuer Kredit genügt',
        paragraphs: [
          'Für ein punktuelles Vorhaben und ein bereits gesundes Budget ist ein zweckgebundener Kredit oft einfacher und günstiger als eine Umschuldung.',
        ],
      },
      {
        heading: 'Der richtige Reflex',
        paragraphs: [
          'Vergleichen Sie die Gesamtkosten in beiden Szenarien, nicht nur die Rate. Die Vorabeinschätzung führt Sie zur realistischen Option für Ihre Lage.',
        ],
      },
    ],
  },
  {
    slug: 'assurance-emprunteur-facultative',
    category: 'comprendre',
    title: 'Restschuldversicherung: freiwillig, aber sinnvoll?',
    excerpt:
      'Oft freiwillig, mitunter wertvoll. Verstehen, was sie deckt, um in voller Kenntnis zu entscheiden.',
    author: TEAM,
    date: '2026-08-04',
    readingMinutes: 6,
    body: [
      {
        heading: 'Was sie deckt',
        paragraphs: [
          'Die Restschuldversicherung übernimmt die Rückzahlung bei Tod, Invalidität oder, je nach Vertrag, Arbeitsplatzverlust. Sie schützt Ihre Angehörigen ebenso wie den Kreditgeber.',
        ],
      },
      {
        heading: 'Freiwillig, aber abzuwägen',
        paragraphs: [
          'Sie ist nicht immer Pflicht, doch der Verzicht verlagert das Risiko auf Sie und Ihre Angehörigen. Die richtige Abwägung hängt von Ihrer familiären Lage und der Laufzeit des Kredits ab.',
        ],
      },
      {
        heading: 'Den Wettbewerb spielen lassen',
        paragraphs: [
          'Sie sind nicht verpflichtet, die Versicherung des Kreditgebers zu nehmen: Die freie Wahl ermöglicht oft einen gleichwertigen Schutz zu besserem Preis.',
        ],
      },
    ],
  },
  {
    slug: 'preparer-son-dossier-documents',
    category: 'comprendre',
    title: 'Die Unterlagen vorbereiten: die Dokumente, die den Unterschied machen',
    excerpt:
      'Vollständige, geordnete Unterlagen beschleunigen die Prüfung und schaffen Vertrauen. Die nützliche Liste, ohne Überflüssiges.',
    author: TEAM,
    date: '2026-08-05',
    readingMinutes: 4,
    body: [
      {
        heading: 'Identität und Wohnsitz',
        paragraphs: [
          'Gültiges Ausweisdokument und aktueller Wohnsitznachweis: die Basis, die man von Anfang an bereithalten sollte.',
        ],
      },
      {
        heading: 'Einkünfte und Lasten',
        paragraphs: [
          'Gehaltsabrechnungen oder Jahresabschlüsse, letzter Steuerbescheid, Kontoauszüge: Sie zeigen die Regelmäßigkeit Ihrer Einkünfte und die Realität Ihrer Lasten.',
        ],
      },
      {
        heading: 'Die Nachweise zum Vorhaben',
        paragraphs: [
          'Kostenvoranschlag, Kaufvorvertrag, Bestellung: Ein belegtes Vorhaben wird schneller bearbeitet und lässt sich besser vertreten.',
        ],
      },
    ],
  },
];
