import type { Article } from './types';

const TEAM = 'La redacción';

export const es: Article[] = [
  {
    slug: 'comprendre-inscription-ficp',
    category: 'fichage',
    title: 'En un fichero de morosidad: qué cambia realmente para un préstamo',
    excerpt:
      'Estar en un fichero de morosidad no cierra todas las puertas. Qué bloquea la inscripción, qué no impide y cómo avanzar.',
    author: TEAM,
    date: '2026-06-15',
    readingMinutes: 6,
    body: [
      {
        heading: 'Qué es el fichero',
        paragraphs: [
          'Los ficheros de morosidad registran los incidentes de pago caracterizados. Figurar en ellos señala un impago pasado: no es una prohibición de endeudarse.',
          'La inscripción es temporal: se cancela al regularizar el incidente, o al término de un plazo máximo.',
        ],
      },
      {
        heading: 'Qué bloquea la inscripción',
        paragraphs: [
          'Mientras estás inscrito, el crédito clásico concedido por simple puntuación casi siempre se te rechazará: los bancos tradicionales consultan el fichero y se detienen ahí.',
        ],
      },
      {
        heading: 'Qué sigue siendo posible',
        paragraphs: [
          'Una financiación respaldada por una garantía real —un inmueble, por ejemplo— puede estudiarse pese a la inscripción, porque la decisión ya no se basa solo en la puntuación.',
          'Ante todo, comprueba tu situación en los ficheros (ASNEF, Banco de España): el derecho de acceso a tus datos es gratuito.',
        ],
      },
    ],
  },
  {
    slug: 'rachat-credit-hypothecaire-guide',
    category: 'rachat',
    title: 'Reunificación hipotecaria: cuando tu inmueble se convierte en una solución',
    excerpt:
      'Reunir tus préstamos apoyándote en tu inmueble: para quién es pertinente, qué cambia en la cuota y los límites.',
    author: TEAM,
    date: '2026-07-02',
    readingMinutes: 8,
    body: [
      {
        heading: 'El principio',
        paragraphs: [
          'La reunificación hipotecaria agrupa tus préstamos en curso en uno solo, garantizado por tu inmueble. La cuota baja, el plazo se alarga, el coste total aumenta: es un equilibrio, no un milagro.',
        ],
      },
      {
        heading: 'Para quién es pertinente',
        paragraphs: [
          'Un propietario cuyo presupuesto está ajustado por varios préstamos, o cuya puntuación bloquea el acceso al crédito clásico. La garantía toma el relevo de la puntuación.',
        ],
      },
      {
        heading: 'Los límites que hay que conocer',
        paragraphs: [
          'Alargar el plazo aumenta el coste total: hazlo solo si la bajada de cuota es realmente necesaria.',
          'El inmueble sirve de garantía: un impago puede llevar a su embargo. La decisión se toma con pleno conocimiento.',
        ],
      },
    ],
  },
  {
    slug: 'taux-endettement-35-pourcent',
    category: 'budget',
    title: 'Ratio de endeudamiento: por qué el 35 % no es un muro',
    excerpt:
      'El umbral del 35 % es una referencia prudencial, no una regla absoluta. Cómo se calcula y qué puede matizarlo.',
    author: TEAM,
    date: '2026-07-12',
    readingMinutes: 5,
    body: [
      {
        heading: 'Cómo se calcula',
        paragraphs: [
          'La ratio de endeudamiento relaciona tus cargas de crédito con tus ingresos. Se divide el conjunto de tus cuotas, incluida la futura, entre tus ingresos netos, y se expresa el resultado en porcentaje.',
        ],
      },
      {
        heading: 'Una referencia, no una guillotina',
        paragraphs: [
          'El umbral del 35 % acota el riesgo, pero el «resto para vivir» cuenta igual: con ingresos altos, superar ligeramente el umbral puede seguir siendo sostenible.',
        ],
      },
      {
        heading: 'Cómo bajarla',
        paragraphs: [
          'Reunir préstamos, alargar un plazo, aportar una suma o liquidar un préstamo pequeño: varias palancas devuelven la ratio a una zona cómoda.',
        ],
      },
    ],
  },
  {
    slug: 'taeg-ou-taux-debiteur',
    category: 'comprendre',
    title: 'TAE o tipo deudor: leer una oferta sin equivocarse',
    excerpt:
      'Dos tipos, dos usos. Entender la diferencia evita malas sorpresas al comparar.',
    author: TEAM,
    date: '2026-07-22',
    readingMinutes: 4,
    body: [
      {
        heading: 'El tipo deudor',
        paragraphs: [
          'Es el tipo nominal que sirve para calcular los intereses. Por sí solo, no indica el coste real del crédito.',
        ],
      },
      {
        heading: 'La TAE',
        paragraphs: [
          'La Tasa Anual Equivalente integra las comisiones y el seguro eventual. Es la que hay que comparar entre una oferta y otra; es lógicamente superior al tipo deudor.',
        ],
      },
      {
        heading: 'En la práctica',
        paragraphs: [
          'Compara siempre TAE entre sí, sobre un mismo importe y un mismo plazo. Un tipo deudor bajo acompañado de comisiones altas puede costar más que una oferta de aspecto menos atractivo.',
        ],
      },
    ],
  },
  {
    slug: 'co-emprunteur-ou-caution',
    category: 'garanties',
    title: 'Coprestatario o avalista: ¿cuál refuerza tu expediente?',
    excerpt:
      'Ambos tranquilizan al prestamista, pero no comprometen de la misma forma. Cómo elegir según tu situación.',
    author: TEAM,
    date: '2026-07-30',
    readingMinutes: 5,
    body: [
      {
        heading: 'El coprestatario',
        paragraphs: [
          'Se endeuda contigo: sus ingresos se suman a los tuyos y queda comprometido en igual medida. Suele ser la palanca más eficaz para un expediente frágil.',
        ],
      },
      {
        heading: 'El avalista',
        paragraphs: [
          'Se compromete a pagar si tú no lo haces, sin ser cotitular del préstamo. Útil cuando un allegado quiere ayudar sin coprestar.',
        ],
      },
      {
        heading: 'Cómo elegir',
        paragraphs: [
          'Un coprestatario refuerza la capacidad de reembolso; un avalista asegura el reembolso. La buena elección depende de quién te acompaña y de lo que la persona acepta comprometer.',
        ],
      },
    ],
  },
  {
    slug: 'dossier-independant-sans-bilans',
    category: 'profils',
    title: 'Autónomo: un expediente sólido sin tres balances',
    excerpt:
      'Una actividad reciente o cuentas atípicas no condenan tu solicitud. Lo que compensa la ausencia de tres balances.',
    author: TEAM,
    date: '2026-08-01',
    readingMinutes: 6,
    body: [
      {
        heading: 'Qué mira el prestamista',
        paragraphs: [
          'Más allá de los balances, la regularidad de los cobros, la tesorería y la coherencia de la actividad pesan mucho. Unos extractos profesionales regulares cuentan una historia creíble.',
        ],
      },
      {
        heading: 'Compensar una actividad reciente',
        paragraphs: [
          'Una aportación, una garantía, un coprestatario asalariado o una cartera de pedidos documentada pueden tranquilizar donde falta antigüedad.',
        ],
      },
      {
        heading: 'Preparar los justificantes adecuados',
        paragraphs: [
          'Situación contable al día, extractos de los últimos meses, contratos en curso: un expediente ordenado acelera el estudio e inspira confianza.',
        ],
      },
    ],
  },
  {
    slug: 'emprunter-apres-60-ans',
    category: 'profils',
    title: 'Endeudarse después de los 60: lo que cuenta de verdad',
    excerpt:
      'La edad no prohíbe el crédito. Plazo, seguro y garantías simplemente se piensan de otra manera.',
    author: TEAM,
    date: '2026-08-02',
    readingMinutes: 5,
    body: [
      {
        heading: 'Ingresos a menudo estables',
        paragraphs: [
          'Una pensión es un ingreso regular y previsible, apreciado por los prestamistas. La cuestión no es la edad en sí, sino el plazo del préstamo con respecto a ella.',
        ],
      },
      {
        heading: 'La cuestión del seguro',
        paragraphs: [
          'El seguro del prestatario puede costar más con la edad, pero es opcional y existen soluciones, sobre todo apoyándose en una garantía real.',
        ],
      },
      {
        heading: 'Apoyarse en el patrimonio',
        paragraphs: [
          'Un inmueble permite plantear una reunificación o un préstamo hipotecario, donde la garantía cuenta más que la edad.',
        ],
      },
    ],
  },
  {
    slug: 'financer-un-projet-avec-cdd-interim',
    category: 'profils',
    title: 'Contrato temporal, ETT: financiar un proyecto con un contrato corto',
    excerpt:
      'Un contrato corto debilita el expediente, sin hacerlo imposible. Los elementos que inclinan la balanza.',
    author: TEAM,
    date: '2026-08-03',
    readingMinutes: 5,
    body: [
      {
        heading: 'La regularidad prima',
        paragraphs: [
          'Tres años de trabajo temporal continuo en el mismo sector pesan a menudo más que un contrato indefinido reciente. La continuidad de los ingresos tranquiliza más que la etiqueta del contrato.',
        ],
      },
      {
        heading: 'Reforzar el expediente',
        paragraphs: [
          'Un coprestatario con contrato indefinido, una aportación o un ahorro regular compensan la incertidumbre percibida de un contrato corto.',
        ],
      },
      {
        heading: 'Elegir el plazo adecuado',
        paragraphs: [
          'Un plazo medido y una cuota prudente muestran que el proyecto se sostiene, aunque los ingresos varíen de un mes a otro.',
        ],
      },
    ],
  },
  {
    slug: 'apport-personnel-role',
    category: 'comprendre',
    title: 'La aportación personal: cuánto, por qué, cuándo prescindir de ella',
    excerpt:
      'La aportación no siempre es obligatoria, pero a menudo cambia las cosas. Lo que aporta, más allá del importe.',
    author: TEAM,
    date: '2026-08-03',
    readingMinutes: 5,
    body: [
      {
        heading: 'Qué revela una aportación',
        paragraphs: [
          'Más allá de reducir el importe prestado, la aportación demuestra una capacidad de ahorro. Es una señal de seriedad para el prestamista.',
        ],
      },
      {
        heading: 'Cuánto apuntar',
        paragraphs: [
          'No hay una regla única; una aportación, aunque modesta, mejora el expediente y el tipo. En algunos proyectos, cubre los gastos accesorios.',
        ],
      },
      {
        heading: 'Cuándo prescindir de ella',
        paragraphs: [
          'Sin aportación, una garantía sólida o unos ingresos regulares pueden bastar. La ausencia de aportación no es determinante, se compensa.',
        ],
      },
    ],
  },
  {
    slug: 'rachat-ou-nouveau-credit',
    category: 'rachat',
    title: 'Reunificación de deuda o nuevo préstamo: cómo elegir',
    excerpt:
      '¿Reunir lo existente o añadir un préstamo? La opción correcta depende de tu presupuesto y de tu proyecto.',
    author: TEAM,
    date: '2026-08-04',
    readingMinutes: 5,
    body: [
      {
        heading: 'Cuándo tiene sentido la reunificación',
        paragraphs: [
          'Si varios préstamos pesan sobre tu presupuesto, reunirlos reduce la cuota global y da aire, aunque sea a costa de alargar el plazo.',
        ],
      },
      {
        heading: 'Cuándo basta con un nuevo préstamo',
        paragraphs: [
          'Para un proyecto puntual y un presupuesto ya saneado, un préstamo dedicado suele ser más simple y menos costoso que una reunificación.',
        ],
      },
      {
        heading: 'El buen reflejo',
        paragraphs: [
          'Compara el coste total en ambos escenarios, no solo la cuota. El prediagnóstico te orienta hacia la opción realista para tu situación.',
        ],
      },
    ],
  },
  {
    slug: 'assurance-emprunteur-facultative',
    category: 'comprendre',
    title: 'Seguro del prestatario: opcional, pero ¿útil?',
    excerpt:
      'A menudo opcional, a veces valioso. Entender qué cubre para decidir con pleno conocimiento.',
    author: TEAM,
    date: '2026-08-04',
    readingMinutes: 6,
    body: [
      {
        heading: 'Qué cubre',
        paragraphs: [
          'El seguro del prestatario toma el relevo del reembolso en caso de fallecimiento, invalidez o, según los contratos, pérdida de empleo. Protege tanto a tus allegados como al prestamista.',
        ],
      },
      {
        heading: 'Opcional, pero a sopesar',
        paragraphs: [
          'No siempre es obligatorio, pero prescindir de él traslada el riesgo a ti y a tus allegados. El buen equilibrio depende de tu situación familiar y del plazo del préstamo.',
        ],
      },
      {
        heading: 'Hacer jugar la competencia',
        paragraphs: [
          'No estás obligado a contratar el seguro del prestamista: la libre elección permite a menudo una cobertura equivalente a mejor precio.',
        ],
      },
    ],
  },
  {
    slug: 'preparer-son-dossier-documents',
    category: 'comprendre',
    title: 'Preparar tu expediente: los documentos que marcan la diferencia',
    excerpt:
      'Un expediente completo y ordenado acelera el estudio e inspira confianza. La lista útil, sin superfluo.',
    author: TEAM,
    date: '2026-08-05',
    readingMinutes: 4,
    body: [
      {
        heading: 'La identidad y el domicilio',
        paragraphs: [
          'Documento de identidad en vigor y justificante de domicilio reciente: la base, a tener a mano desde el principio.',
        ],
      },
      {
        heading: 'Los ingresos y las cargas',
        paragraphs: [
          'Nóminas o balances, última declaración de la renta, extractos de cuenta: muestran la regularidad de tus ingresos y la realidad de tus cargas.',
        ],
      },
      {
        heading: 'Los justificantes del proyecto',
        paragraphs: [
          'Presupuesto, contrato de arras, pedido: un proyecto documentado se tramita más rápido y se defiende mejor.',
        ],
      },
    ],
  },
];
