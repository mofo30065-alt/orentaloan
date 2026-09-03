import type { Article } from './types';

const TEAM = 'A redação';

export const pt: Article[] = [
  {
    slug: 'comprendre-inscription-ficp',
    category: 'fichage',
    title: 'Com incidente de crédito registado: o que muda mesmo para um crédito',
    excerpt:
      'Estar registado por um incidente de crédito não fecha todas as portas. O que o registo bloqueia, o que não impede e como avançar.',
    author: TEAM,
    date: '2026-06-15',
    readingMinutes: 6,
    body: [
      {
        heading: 'O que é o registo',
        paragraphs: [
          'As centrais de responsabilidades de crédito registam os incidentes de pagamento caracterizados. Constar delas assinala um incumprimento passado: não é uma proibição de contrair crédito.',
          'O registo é temporário: é levantado com a regularização do incidente, ou no termo de um prazo máximo.',
        ],
      },
      {
        heading: 'O que o registo bloqueia',
        paragraphs: [
          'Enquanto estiver registado, o crédito clássico concedido por simples pontuação ser-lhe-á quase sempre recusado: os bancos tradicionais consultam a central e param aí.',
        ],
      },
      {
        heading: 'O que continua possível',
        paragraphs: [
          'Um financiamento garantido por uma garantia real — um imóvel, por exemplo — pode ser analisado apesar do registo, porque a decisão já não assenta apenas na pontuação.',
          'Acima de tudo, verifique a sua situação junto da central de responsabilidades de crédito (Banco de Portugal): o direito de acesso aos seus dados é gratuito.',
        ],
      },
    ],
  },
  {
    slug: 'rachat-credit-hypothecaire-guide',
    category: 'rachat',
    title: 'Consolidação com garantia hipotecária: quando o seu imóvel se torna uma solução',
    excerpt:
      'Juntar os seus créditos apoiando-se no seu imóvel: para quem é pertinente, o que muda na prestação e os limites.',
    author: TEAM,
    date: '2026-07-02',
    readingMinutes: 8,
    body: [
      {
        heading: 'O princípio',
        paragraphs: [
          'A consolidação com garantia hipotecária reúne os seus créditos em curso num só, garantido pelo seu imóvel. A prestação desce, o prazo alonga-se, o custo total aumenta: é um compromisso, não um milagre.',
        ],
      },
      {
        heading: 'Para quem é pertinente',
        paragraphs: [
          'Um proprietário cujo orçamento está apertado por vários créditos, ou cuja pontuação bloqueia o acesso ao crédito clássico. A garantia toma o lugar da pontuação.',
        ],
      },
      {
        heading: 'Os limites a conhecer',
        paragraphs: [
          'Alongar o prazo aumenta o custo total: só o faça se a descida da prestação for realmente necessária.',
          'O imóvel serve de garantia: um incumprimento pode levar à sua execução. A decisão toma-se com pleno conhecimento.',
        ],
      },
    ],
  },
  {
    slug: 'taux-endettement-35-pourcent',
    category: 'budget',
    title: 'Taxa de esforço: porque é que 35 % não é um muro',
    excerpt:
      'O limiar de 35 % é uma referência prudencial, não uma regra absoluta. Como se calcula e o que a pode matizar.',
    author: TEAM,
    date: '2026-07-12',
    readingMinutes: 5,
    body: [
      {
        heading: 'Como se calcula',
        paragraphs: [
          'A taxa de esforço relaciona os seus encargos de crédito com os seus rendimentos. Divide-se o conjunto das suas prestações, incluindo a futura, pelos seus rendimentos líquidos, e exprime-se o resultado em percentagem.',
        ],
      },
      {
        heading: 'Uma referência, não uma guilhotina',
        paragraphs: [
          'O limiar de 35 % enquadra o risco, mas o «rendimento disponível» conta tanto quanto: com rendimentos elevados, ultrapassar ligeiramente o limiar pode continuar sustentável.',
        ],
      },
      {
        heading: 'Baixá-la',
        paragraphs: [
          'Juntar créditos, alongar um prazo, entregar uma quantia ou liquidar um pequeno crédito: várias alavancas trazem a taxa de volta a uma zona confortável.',
        ],
      },
    ],
  },
  {
    slug: 'taeg-ou-taux-debiteur',
    category: 'comprendre',
    title: 'TAEG ou taxa devedora: ler uma proposta sem se enganar',
    excerpt:
      'Duas taxas, dois usos. Compreender a diferença evita más surpresas na hora de comparar.',
    author: TEAM,
    date: '2026-07-22',
    readingMinutes: 4,
    body: [
      {
        heading: 'A taxa devedora',
        paragraphs: [
          'É a taxa nominal que serve para calcular os juros. Por si só, não indica o custo real do crédito.',
        ],
      },
      {
        heading: 'A TAEG',
        paragraphs: [
          'A Taxa Anual de Encargos Efetiva Global integra os encargos e o eventual seguro. É essa que deve comparar de uma proposta para outra; é logicamente superior à taxa devedora.',
        ],
      },
      {
        heading: 'Na prática',
        paragraphs: [
          'Compare sempre TAEG entre si, sobre um mesmo montante e um mesmo prazo. Uma taxa devedora baixa acompanhada de encargos elevados pode custar mais do que uma proposta de aspeto menos apelativo.',
        ],
      },
    ],
  },
  {
    slug: 'co-emprunteur-ou-caution',
    category: 'garanties',
    title: 'Comutuário ou fiador: qual reforça o seu processo?',
    excerpt:
      'Ambos tranquilizam o mutuante, mas não vinculam da mesma forma. Como escolher consoante a sua situação.',
    author: TEAM,
    date: '2026-07-30',
    readingMinutes: 5,
    body: [
      {
        heading: 'O comutuário',
        paragraphs: [
          'Contrai o crédito consigo: os seus rendimentos somam-se aos seus e fica vinculado em igual medida. É muitas vezes a alavanca mais eficaz para um processo frágil.',
        ],
      },
      {
        heading: 'O fiador',
        paragraphs: [
          'Compromete-se a pagar se você não o fizer, sem ser cotitular do crédito. Útil quando um familiar quer ajudar sem contrair o crédito.',
        ],
      },
      {
        heading: 'Como escolher',
        paragraphs: [
          'Um comutuário reforça a capacidade de reembolso; um fiador assegura o reembolso. A escolha certa depende de quem o acompanha e daquilo a que a pessoa aceita vincular-se.',
        ],
      },
    ],
  },
  {
    slug: 'dossier-independant-sans-bilans',
    category: 'profils',
    title: 'Independente: um processo sólido sem três balanços',
    excerpt:
      'Uma atividade recente ou contas atípicas não condenam o seu pedido. O que compensa a ausência de três balanços.',
    author: TEAM,
    date: '2026-08-01',
    readingMinutes: 6,
    body: [
      {
        heading: 'O que o mutuante analisa',
        paragraphs: [
          'Para além dos balanços, a regularidade dos recebimentos, a tesouraria e a coerência da atividade pesam muito. Extratos profissionais regulares contam uma história credível.',
        ],
      },
      {
        heading: 'Compensar uma atividade recente',
        paragraphs: [
          'Uma entrada, uma garantia, um comutuário assalariado ou uma carteira de encomendas documentada podem tranquilizar onde falta antiguidade.',
        ],
      },
      {
        heading: 'Preparar os comprovativos certos',
        paragraphs: [
          'Situação contabilística atualizada, extratos dos últimos meses, contratos em curso: um processo organizado acelera a análise e inspira confiança.',
        ],
      },
    ],
  },
  {
    slug: 'emprunter-apres-60-ans',
    category: 'profils',
    title: 'Contrair crédito depois dos 60: o que conta de verdade',
    excerpt:
      'A idade não proíbe o crédito. Prazo, seguro e garantias pensam-se simplesmente de outra forma.',
    author: TEAM,
    date: '2026-08-02',
    readingMinutes: 5,
    body: [
      {
        heading: 'Rendimentos muitas vezes estáveis',
        paragraphs: [
          'Uma pensão é um rendimento regular e previsível, apreciado pelos mutuantes. A questão não é a idade em si, mas o prazo do crédito face a ela.',
        ],
      },
      {
        heading: 'A questão do seguro',
        paragraphs: [
          'O seguro do mutuário pode custar mais com a idade, mas é facultativo e existem soluções, sobretudo apoiando-se numa garantia real.',
        ],
      },
      {
        heading: 'Apoiar-se no património',
        paragraphs: [
          'Um imóvel permite equacionar uma consolidação ou um crédito hipotecário, onde a garantia conta mais do que a idade.',
        ],
      },
    ],
  },
  {
    slug: 'financer-un-projet-avec-cdd-interim',
    category: 'profils',
    title: 'Contrato a termo, trabalho temporário: financiar um projeto com um contrato curto',
    excerpt:
      'Um contrato curto fragiliza o processo, sem o tornar impossível. Os elementos que fazem pender a balança.',
    author: TEAM,
    date: '2026-08-03',
    readingMinutes: 5,
    body: [
      {
        heading: 'A regularidade prevalece',
        paragraphs: [
          'Três anos de trabalho temporário contínuo no mesmo setor pesam muitas vezes mais do que um contrato sem termo recente. A continuidade dos rendimentos tranquiliza mais do que o rótulo do contrato.',
        ],
      },
      {
        heading: 'Reforçar o processo',
        paragraphs: [
          'Um comutuário com contrato sem termo, uma entrada ou uma poupança regular compensam a incerteza percebida de um contrato curto.',
        ],
      },
      {
        heading: 'Escolher o prazo certo',
        paragraphs: [
          'Um prazo medido e uma prestação prudente mostram que o projeto se aguenta, mesmo que os rendimentos variem de mês para mês.',
        ],
      },
    ],
  },
  {
    slug: 'apport-personnel-role',
    category: 'comprendre',
    title: 'A entrada pessoal: quanto, porquê, quando prescindir dela',
    excerpt:
      'A entrada nem sempre é obrigatória, mas muitas vezes muda o cenário. O que traz, para além do montante.',
    author: TEAM,
    date: '2026-08-03',
    readingMinutes: 5,
    body: [
      {
        heading: 'O que revela uma entrada',
        paragraphs: [
          'Para além de reduzir o montante financiado, a entrada demonstra uma capacidade de poupança. É um sinal de seriedade para o mutuante.',
        ],
      },
      {
        heading: 'Quanto visar',
        paragraphs: [
          'Não há uma regra única; uma entrada, mesmo modesta, melhora o processo e a taxa. Em alguns projetos, cobre os encargos acessórios.',
        ],
      },
      {
        heading: 'Quando prescindir dela',
        paragraphs: [
          'Sem entrada, uma garantia sólida ou rendimentos regulares podem bastar. A ausência de entrada não é impeditiva, compensa-se.',
        ],
      },
    ],
  },
  {
    slug: 'rachat-ou-nouveau-credit',
    category: 'rachat',
    title: 'Consolidação de créditos ou novo crédito: como escolher',
    excerpt:
      'Juntar o existente ou acrescentar um crédito? A opção certa depende do seu orçamento e do seu projeto.',
    author: TEAM,
    date: '2026-08-04',
    readingMinutes: 5,
    body: [
      {
        heading: 'Quando a consolidação faz sentido',
        paragraphs: [
          'Se vários créditos pesam no seu orçamento, juntá-los reduz a prestação global e dá folga, ainda que alongando o prazo.',
        ],
      },
      {
        heading: 'Quando basta um novo crédito',
        paragraphs: [
          'Para um projeto pontual e um orçamento já saudável, um crédito dedicado é muitas vezes mais simples e menos dispendioso do que uma consolidação.',
        ],
      },
      {
        heading: 'O reflexo certo',
        paragraphs: [
          'Compare o custo total nos dois cenários, não apenas a prestação. O pré-diagnóstico orienta-o para a opção realista para a sua situação.',
        ],
      },
    ],
  },
  {
    slug: 'assurance-emprunteur-facultative',
    category: 'comprendre',
    title: 'Seguro do mutuário: facultativo, mas útil?',
    excerpt:
      'Muitas vezes facultativo, por vezes precioso. Compreender o que cobre para decidir com conhecimento de causa.',
    author: TEAM,
    date: '2026-08-04',
    readingMinutes: 6,
    body: [
      {
        heading: 'O que cobre',
        paragraphs: [
          'O seguro do mutuário assume o reembolso em caso de morte, invalidez ou, consoante os contratos, perda de emprego. Protege tanto os seus familiares como o mutuante.',
        ],
      },
      {
        heading: 'Facultativo, mas a ponderar',
        paragraphs: [
          'Nem sempre é obrigatório, mas prescindir dele transfere o risco para si e para os seus familiares. O equilíbrio certo depende da sua situação familiar e do prazo do crédito.',
        ],
      },
      {
        heading: 'Fazer jogar a concorrência',
        paragraphs: [
          'Não é obrigado a subscrever o seguro do mutuante: a livre escolha permite muitas vezes uma cobertura equivalente a melhor preço.',
        ],
      },
    ],
  },
  {
    slug: 'preparer-son-dossier-documents',
    category: 'comprendre',
    title: 'Preparar o seu processo: os documentos que fazem a diferença',
    excerpt:
      'Um processo completo e organizado acelera a análise e inspira confiança. A lista útil, sem supérfluo.',
    author: TEAM,
    date: '2026-08-05',
    readingMinutes: 4,
    body: [
      {
        heading: 'A identidade e a morada',
        paragraphs: [
          'Documento de identificação válido e comprovativo de morada recente: a base, a ter à mão desde o início.',
        ],
      },
      {
        heading: 'Os rendimentos e os encargos',
        paragraphs: [
          'Recibos de vencimento ou balanços, última declaração de IRS, extratos bancários: mostram a regularidade dos seus rendimentos e a realidade dos seus encargos.',
        ],
      },
      {
        heading: 'Os comprovativos do projeto',
        paragraphs: [
          'Orçamento, contrato-promessa, nota de encomenda: um projeto documentado é tratado mais depressa e defende-se melhor.',
        ],
      },
    ],
  },
];
