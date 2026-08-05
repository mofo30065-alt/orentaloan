# CLAUDE.md — Mémoire de projet « Spark loan »

> Site de présentation d'offres de prêt pour un **organisme de crédit spécialisé** (prêteur en propre)
> ciblant les emprunteurs **refusés par les banques conventionnelles**, sur 10 marchés de la zone euro.
> Positionnement : honnêteté, transparence et **pré-diagnostic d'éligibilité** comme argument commercial.
> Ce fichier est la source de vérité inter-sessions. Le mettre à jour à la fin de chaque phase.

---

## 1. Positionnement & règles éditoriales (structurantes, pas cosmétiques)

- Public : fichés FICP/FCC (ou équivalents nationaux), rachat hypothécaire, TNS/indépendants, contrats courts, seniors, trésorerie tendue.
- Ton : factuel, respectueux, 2ᵉ personne, phrases courtes. Jamais compatissant à l'excès, jamais culpabilisant, jamais commercial-agressif. Aucune urgence artificielle, aucun compte à rebours, aucun « plus que N dossiers ».
- Job du site : transformer un emprunteur refusé ailleurs en **dossier qualifié et réaliste**, en écartant en amont les demandes sans issue.

### Formulations INTERDITES (dans les 10 langues, titres & meta compris)
« crédit sans refus », « 100 % d'acceptation », « réponse garantie », « sans justificatif »,
« sans étude de dossier », « même fiché, accord assuré », toute promesse d'octroi.
→ Un lint de contenu (`scripts/check-forbidden.ts`) scanne les `messages/**` à chaque build.

### Obligations de conformité (traitées comme éléments de design de 1er rang)
- ~~**Aucune somme demandée avant déblocage des fonds** — affirmé visiblement (composant `NoAdvanceFee`).~~ **Retiré à la demande du client (session courante)** : composant `NoAdvanceFee` supprimé, et toutes les allusions (« aucun frais avant déblocage », Q FAQ anti-fraude, item réassurance, figure « 0 € », mentions form) purgées dans les 10 langues. ⚠️ Réassurance conso classique — à réintroduire si exigence réglementaire.
- **Encadré d'information normalisé** (montant, durée, TAEG, mensualité, coût total + exemple représentatif chiffré) sur chaque page produit et chaque résultat de simulation (`StandardInfoBox`).
- **Droit de rétractation** affiché (durée = donnée par pays).
- Tout chiffre = **indicatif, non contractuel, sous réserve d'acceptation** — traité comme information utile, pas astérisque gris.
- RGPD strict : aucun tracker avant consentement, calculs côté client tant que rien n'est soumis, refus aussi simple que l'acceptation.
- Cadre légal = **données par pays** (`data/countries/*`), jamais du texte figé traduit. La locale n'affiche que les données de SON pays (FR → France uniquement).

---

## 2. Stack technique

| Domaine | Choix | Note |
|---|---|---|
| Framework | Next.js 15+ App Router, RSC | Rendu statique des pages crédit, SEO multilingue |
| Langage | TypeScript **strict** | `noUncheckedIndexedAccess`, pas de `any` |
| Styles | Tailwind CSS + thème custom | Tokens en config, **0 hex/px en dur dans les composants** |
| i18n | next-intl | routing `/[locale]/`, slugs traduits, formats via `Intl` |
| Composants | shadcn/ui restylé intégralement | pas de look shadcn par défaut |
| Formulaires | React Hook Form + Zod | validation par étape |
| Graphes | Recharts | répartition capital/intérêts |
| Motion | Framer Motion, parcimonie | uniquement au service de la lecture des chiffres |
| Contenu blog | MDX (`content/blog/**`) | architecture prête à brancher un CMS |
| Tests | Vitest + Testing Library | **obligatoires sur `lib/finance`** |
| Lint/format | ESLint + Prettier | pas de code mort, pas de commentaire qui paraphrase |

---

## 3. Arborescence (voir plan complet en session 0)

`app/[locale]/` routes · `components/` UI par domaine · `lib/` logique pure (finance, diagnostic, i18n, seo, format, validation) · `data/` données typées (crédits, pays, faq…) · `messages/<locale>/*.json` traductions par namespace · `content/blog/` MDX · `styles/globals.css` · `public/` assets. **Racine sans `src/`** pour coller aux chemins `/lib` et `/components` du brief.

---

## 4. Conventions de nommage

- Fichiers composants : `PascalCase.tsx` (un composant par fichier, export nommé).
- Hooks : `useCamelCase.ts`. Utilitaires/logique : `camelCase.ts`. Types partagés : `types.ts` par domaine.
- Données crédit : `data/credits/<kebab-slug>.ts`, slug = clé i18n (`rachat-credit`, `pret-hypothecaire`…).
- Namespaces i18n : `common, home, credits, simulator, diagnostic, form, legal, blog, contact`.
- Clés i18n : `namespace.section.element` en camelCase (`home.hero.title`).
- Pas d'abréviation obscure. Nommer en anglais dans le code, contenu en langue via i18n.

---

## 5. Règles de code

- Logique métier dans `lib/`, **zéro dépendance React** dans `lib/finance` et `lib/diagnostic`.
- Composants courts (< ~150 lignes), typés, présentational vs. container séparés.
- Aucune valeur en dur : couleur → token, espacement → échelle, texte → `messages/`.
- Server Components par défaut ; `"use client"` seulement pour l'interactif (sliders, form, motion).
- Argent : **arithmétique en centimes entiers**, arrondi `half-up` documenté ; jamais de float sur les centimes sans stratégie assumée. Le dernier terme d'amortissement absorbe le résidu d'arrondi.

---

## 6. Règles i18n

- 10 langues : **DE, ES, EN, IT, FR, PL, PT, BG, NL, RO**. FR = source de vérité, construit en premier.
- Aucun texte en dur. Formats (milliers, décimales, date, position €) via `Intl`, jamais à la main.
- Détection navigateur au 1er passage, choix manuel prioritaire et mémorisé (cookie).
- URLs localisées + slugs traduits par page crédit ; `hreflang` + sitemap multilingue.
- **BG en cyrillique** : Roboto couvre le cyrillique (OK corps de texte) ; titrage à valider (voir Décisions #1).
- Débordements DE/PL à tester sur boutons/labels. Textes légaux traduits au même niveau que le marketing.
- Toute traduction de vocabulaire financier réglementé incertaine → signalée dans la PR, pas inventée.

---

## 7. Règles de design — Tokens (source de vérité)

> Palette délibérément **hors du bleu bancaire** : ancre verte calme + papier chaud + accent ambre rare.
> Divergence assumée vis-à-vis de Younited (violet) : on garde SA typo, pas SA couleur.

### 7.1 Couleurs nommées
| Token | Hex | Rôle | Règle d'usage |
|---|---|---|---|
| `ardoise` | `#14201C` | Encre / texte principal | Texte sur fonds clairs (AAA sur papier) |
| `papier` | `#F4F1E9` | Fond de page (bone chaud) | Fond dominant, calme, non clinique |
| `craie` | `#FBFAF5` | Surface / cartes | Cartes posées sur papier |
| `pin` | `#12463A` | **Couleur dominante de marque** (vert profond) | Boutons primaires, header/footer, confiance. Texte blanc dessus (AAA) |
| `ambre` | `#E4A33B` | **Accent signature** (miel) | RARE : CTA clé, remplissage slider actif, état « piste sérieuse ». **Jamais en texte courant** (contraste insuffisant) ; texte `ardoise` dessus |
| `argile` | `#B85C38` | Accent secondaire humain (terre cuite) | État « à consolider » nuancé, illustrations. En aplat de préférence |
| `brume` | `#DBE2DB` | Vert-gris doux | Bordures, séparateurs, surfaces muettes |
| `pierre` | `#6E6E66` | Neutre calme | État **« non envisageable »** (JAMAIS de rouge — c'est une orientation, pas un refus) |
| `alerte` | `#A83A2B` | Danger | **Uniquement** erreurs de formulaire ; jamais dans le diagnostic |

**Dark mode** : `nuit #0E1A16` (fond), `#15241F` (surface), texte `os #ECE7DB`, `ambre` conservé (lueur), `pin` éclairci pour le contraste.

### 7.2 Tokens sémantiques (ce que les composants consomment)
`bg → papier` · `surface → craie` · `text → ardoise` · `text-muted → pierre` · `brand → pin` · `on-brand → craie` · `accent → ambre` · `on-accent → ardoise` · `border → brume` · `danger → alerte`.
États diagnostic : `state-go → pin`, `state-work → ambre`, `state-stop → pierre`.

### 7.3 Typographie (100 % inspirée de younited.com)
- **Titrage** : `RocGrotesk` (réf. Younited) — grotesque contemporaine, large, assurée, utilisée **avec retenue**. Fallback dev/open : `Space Grotesk`. Fallback cyrillique (BG) : voir Décisions #1.
- **Texte** : `Roboto` (réf. Younited) — via `next/font`, couvre Latin étendu + cyrillique (BG/PL/RO OK).
- **Chiffres (couche dédiée, ajout au-delà de Younited)** :
  - Grands nombres héros (mensualité, taux) : titrage + **chiffres tabulaires** (`font-feature-settings: 'tnum'`).
  - Tableaux denses (amortissement, comparatifs) : `Roboto Mono` — alignement colonne parfait, registre « données/grand-livre ».
  - Nombres en ligne dans la prose : `Roboto` + `tnum`.
- Échelle fluide (`clamp`) : `display 2.6→4rem` · `h1 2→3rem` · `h2 1.5→2rem` · `h3 1.25→1.5rem` · `body 1rem` · `small .875rem` · `micro .75rem`.

### 7.4 Espacement (base 4px, nommée)
`2xs .25 · xs .5 · sm .75 · md 1 · lg 1.5 · xl 2 · 2xl 3 · 3xl 4 · 4xl 6 · 5xl 8` (rem).
Rythme de section vertical : `clamp(3rem, 6vw, 6rem)`.

### 7.5 Rayon & ombres
- Rayon : `sm 6 · md 10 · lg 16 · xl 24 · pill 9999` (px). Cartes = `lg`.
- Ombres (teintées `pin`, douces, jamais noires dures) :
  `sm 0 1px 2px rgba(18,70,58,.06)` · `md 0 4px 16px rgba(18,70,58,.08)` · `lg 0 12px 32px rgba(18,70,58,.10)` · `lift` (carte « La Lecture ») = superposition md+lg.

### 7.6 Élément signature
**« La Lecture »** — restitution du pré-diagnostic. Carte `lift`, chiffres tabulaires, 3 états honnêtes (`go/work/stop`) avec **motif** + « ce qui pourrait changer la réponse ». Motif récurrent du site : **soulignement ambre fin** qui « souligne le vrai critère » (thème de la transparence). L'état `stop` est un vrai état conçu, calme (`pierre`), qui oriente vers une ressource — pas un formulaire.

### 7.7 Plancher a11y (non annoncé dans l'UI)
Responsive dès 320px · focus clavier visible · contrastes AA min · `prefers-reduced-motion` respecté · cibles tactiles ≥ 44px · sliders utilisables doigt + clavier · annonce ARIA des résultats du simulateur.

---

## 8. Moteur financier (`lib/finance/`) — code critique, testé

- `monthlyPayment`, `totalCost`, `totalInterest`, `amortizationSchedule` (amortissable taux fixe).
- `apr` (TAEG) : résolution actuarielle numérique (bissection/Newton), intègre frais de dossier + assurance si paramétrés.
- Cas particuliers **non forcés dans le modèle amortissable** : `revolving` (renouvelable), `leasing` (LOA), `bridge` (prêt relais).
- `rounding` : centimes entiers, `half-up`, résidu sur dernier terme. Tests de non-régression au centime.

---

## 9. Commandes utiles

```bash
npm run dev            # dev server
npm run build          # build prod (statique pages crédit)
npm run start          # serveur prod
npm run lint           # ESLint
npm run typecheck      # tsc --noEmit
npm run test           # Vitest (watch)
npm run test:run       # Vitest CI
npm run check:content  # lint des formulations interdites (10 langues)
```
> Environnement Windows / PowerShell. Node ≥ 20.

---

## 10. Registre des placeholders `[[À REMPLIR : … ]]`

> ⚠️ **MAJ session courante** : tous les `[[À REMPLIR]]` (et leurs équivalents localisés
> `[[TO FILL]]`, `[[AUSZUFÜLLEN]]`, etc.) ont été **remplis par des données de démonstration
> simulées** (marque « Spark Finance », régulateurs nationaux réels, adresses/e-mails/téléphones
> fictifs, TAEG indicatifs). À **remplacer par les vraies valeurs client** avant mise en ligne.
> Points d'entrée : `data/countries/*` (identité + contact par pays), `messages/*/common.json`
> (`footer.publisher`, `trust.licensedPlaceholder`, `whatsapp`), `messages/*/home.json` (`trust.items`),
> `messages/*/legal.json` (`cgu.placeholder`), `data/credits/products.ts` (grilles de taux).

Données client à fournir avant mise en ligne (actuellement simulées) :
- raison sociale, forme juridique, capital, immatriculation
- n° d'agrément régulateur par pays
- adresse(s) réelle(s) des agences + horaires
- téléphone(s) et n° WhatsApp Business cliquables par pays
- hébergeur, directeur de publication, DPO, médiateur
- taux réels / TAEG / taux d'usure par pays et par produit
- endpoint CRM / destination des demandes
- témoignages réels vérifiés

---

## 11. Journal des décisions prises (à défaut de validation explicite)

- Racine sans `src/` (colle aux chemins `/lib` `/components` du brief).
- Palette pin/papier/ambre choisie contre le bleu bancaire ET contre le violet Younited.
- Couche numérique à 3 niveaux (héros / tableau mono / prose) = ajout au-delà de Younited.
- État « non envisageable » en `pierre` neutre, jamais rouge.
- **Phase 1** : `routing.locales = ['fr']` seul (les 9 autres en phase 8) ; typo par défaut = Space Grotesk + Roboto + Roboto Mono (swap Roc Grotesk possible) ; menus header/mobile/langue en `<details>` (accessibles sans JS) ; marque « Spark loan » = placeholder.
- **Phase 8 (en cours)** : `routing.locales` = 10 ; `request.ts` charge FR puis **superpose** la locale (repli FR par clé, aucune page ne casse) ; `builtLocales = ['fr','en']` prérendus, les 8 autres à la demande. EN complet (messages + `data/countries/en` + `data/blog/en`). Cyrillique BG : Roboto `subsets:['latin','cyrillic']` + repli titrage `var(--font-sans)` (Space Grotesk latin-only). `sitemap.ts` (hreflang) + `robots.ts` + `metadataBase` (env `NEXT_PUBLIC_SITE_URL`). **ES/DE/IT/NL/PT livrés** (brouillon machine validé par l'utilisateur) : chrome + marketing traduits + données pays (régulateur national) ; **corps produits (14 × descriptions/FAQ), articles de blog et `common.org` retombent sur le FR par clé** (contenu long/réglementé balisé, à faire traduire/valider par un pro). **PL/RO/BG livrés finis** (non brouillon, à la demande de l'utilisateur) avec termes réglementés corrects (RRSO/KNF, DAE/BNR, ГПР/БНБ) ; BG en **cyrillique** vérifié. `builtLocales` = **10 locales** prérendues (418 pages). **Reste (phase 9 / pro)** : slugs d'URL traduits par pays + traduction des 14 corps produits longs, articles de blog et `common.org` (repli FR par clé).
- **Retouches client (post-phase 8)** : colorimétrie **violette affinée** (globals.css + tailwind.config : encre `#1F1633`, marque `#4B2E93`, accent `#7C56E6`, états go/work/stop en violet) ; cartes témoignages agrandies (carrousel) ; **avantage « Aucun frais avant déblocage » retiré** du bloc home (grille 3 col.) — le composant `NoAdvanceFee` reste sur produits/transparence ; **blog** : article `arnaque-frais-avance` supprimé + **10 nouveaux articles** (`data/blog/fr.ts`), `BlogStrip` **data-driven** (3 derniers, plus de `home.blog.items`) ; **contact** simplifié (agences/RDV/carte retirés) ; footer relié aux vraies pages + nouvelles pages `/a-propos` & `/engagements` (contenu dans `common.org`). EN/ES/DE : corps produits + articles de blog + `common.org` retombent sur FR (à traduire).
- **Palette (édit. client)** : bascule **vert/ambre → violet/lavande** dans `styles/globals.css` (source de vérité des tokens sémantiques). ⚠️ À harmoniser : `tailwind.config.ts` garde encore la palette nommée verte (`pin/ambre/brume/pierre/state-go/work/stop`) — les états diagnostic restent vert/ambre/gris. Témoignages = carrousel `animate-marquee`.
- **Phase 7** : blocs légaux = **données par pays** (`data/countries/fr.ts` ; la locale n'affiche que son pays) ; mentions/DPO/rétractation (14 j) tirés de là, prose CGU en `[[À REMPLIR]]`. Blog = `data/blog/fr.ts` (contenu structuré, prêt CMS) + chrome i18n `blog.json` ; liste avec filtre `?categorie=` + pagination `?page=`. FAQ = recherche client sur `faq.json`. Bandeau cookies (`CookieBanner`, cookie `SPARK_COOKIE_CONSENT`) : refus = accept en 1 clic, aucun traceur avant consentement (aucun tracker branché à ce stade). `/api/contact` = stub (honeypot + rate limit). Carte contact, RDV, WhatsApp = `[[À REMPLIR]]`.
- **Phase 6** : `buildRequestSchema(t)` = schéma **pur** (messages injectés via i18n, testé). `/api/demande` = validation Zod serveur + honeypot `website` + rate limit **en mémoire** par IP → à passer sur un store partagé type Redis en prod. Session sauvegardée en `localStorage` (`spark_demande`), effacée à l'envoi. Confirmation via `?ref=`.
- **E-mails transactionnels (Resend, session courante)** : module `lib/email/` (`config.ts` env+pays, `messages.ts` i18n, `templates.ts` HTML+texte échappés, `index.ts` client Resend). 8 gabarits : demande (client C1 + admin A1), contact (C3 + A2), simulation (C2 + A3), newsletter (client C4 + admin A4). Branchés dans `/api/{demande,contact,simulation-email,newsletter}` ; la `locale` est postée par les formulaires (`useLocale`). Sans `RESEND_API_KEY` l'envoi est **journalisé et ignoré** (build/dev OK) ; un échec d'envoi ne casse jamais la réponse API. **Corps client localisés 10 langues** (`lib/email/messages.ts`, repli FR par clé ; libellés d'énum réutilisent `messages/*/form.json`) ; **e-mails admin en FR** (interne). Pied de page légal tiré des données pays. Vars : `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_ADMIN`, `EMAIL_REPLY_TO`, `NEWSLETTER_SECRET` (voir `.env.example`).
- **Newsletter double opt-in** : `lib/newsletter.ts` (jeton HMAC-SHA256 de l'e-mail, **sans BDD**) ; `/api/newsletter` (honeypot + rate limit) envoie C4 avec lien signé → page `/[locale]/newsletter/confirmer` vérifie le jeton, notifie l'admin (A4) et confirme. `NewsletterForm` (client) remplace le `<form>` statique du footer. **Reste** : destination CRM/stockage durable de l'abonnement + des demandes, domaine expéditeur vérifié, i18n de la page de confirmation (repli FR). E2E navigateur (stepping/validation live) = à ajouter en phase 9 (Playwright).
- **Phase 5** : 14 produits = `data/credits/products.ts` (chiffres) + `credits.json` (textes par slug) ; template unique `credits/[slug]` (SSG, `generateStaticParams`). Modèles non amortissables (renouvelable/LOA/relais/affacturage) → pas de faux tableau : `SpecialModelNote` + orientation. Encadré représentatif **calculé** par `lib/finance` (`RepresentativeExample`). Taux/montants **indicatifs** `[[À REMPLIR : grilles réelles par pays]]`. Perf phase 9 : `NextIntlClientProvider` sérialise **tous** les namespaces sur chaque page → scoper aux namespaces client utiles.
- **Phase 4** : crédits pilotés par `data/credits/` (slug + `featured`), libellés dans `credits.json` ; la home met les 6 produits `featured` (garantie/actif) en cartes, les classiques en liens. Témoignages et bandeau réassurance = **contenu provisoire** (noms + agrément en `[[À REMPLIR]]`, témoignages réels à fournir). Bandeau blog pointe vers des slugs construits en phase 7. `<Simulator>` hero (`HeroMiniSimulator`) figé à 6,90 % indicatif.
- **Phase 3** : simulateur réutilisable (`<Simulator defaults bounds />`) — les pages produit (phase 5) le prérempliront. Couleurs du graphique **lues sur les tokens CSS** (`--brand`/`--accent`) via `getComputedStyle`, jamais en dur. Slider = Radix restylé. Motion : chiffre animé + transitions de questions, tous sous `prefers-reduced-motion`. `/api/simulation-email` = **stub** (valide + accuse réception, envoi réel phase 6). Perf : `/simulateur` à 280 kB First Load (Recharts) → **import dynamique de Recharts à faire en phase 9**. Pré-diagnostic : le moteur `lib/diagnostic` peut renvoyer `stop` (testé) ; l'état « stop » n'affiche pas de CTA « demande », seulement ressource + simulateur.
- **Phase 2 (conventions moteur, à connaître pour les traductions/mentions)** : `annualRate` = taux **nominal** annuel (fraction) ; le TAEG renvoyé est le taux **effectif** annualisé (directive 2008/48, résolu par dichotomie) → TAEG > taux débiteur, c'est normal. Sommes en **centimes entiers**, dernière échéance régularise le résidu. Relais `deferred` = intérêts **simples** in fine. Renouvelable : `repayable:false` si la mensualité ne couvre pas les intérêts. L'exemple représentatif FR (`legal.json`) a été recalé sur la sortie moteur (mensualité 358,50 €, TAEG 7,12 % pour 15 000 €/48 mois à 6,90 %). En phase 3, l'encadré et le tableau seront **alimentés par `lib/finance`**, plus de valeurs statiques.

## 12. Questions ouvertes / à valider (voir message de session 0)

1. Licence typo : Roc Grotesk (commercial Sudtipos, = Younited exact) vs Space Grotesk (open, même esprit) + fallback cyrillique BG.
2. « Spark loan » = nom de marque à afficher ou nom de projet interne ?
3. Cartographie locale → pays réel d'exploitation (données légales) : ex. EN = Irlande ? DE = Allemagne+Autriche ?
4. Les 10 langues correspondent-elles à 10 pays d'exploitation, ou certaines ne sont que des traductions ?

---

## 13. Avancement des phases

> Build vérifié : `npm run build` OK (compile + type-check strict + lint), `/` → 307 → `/fr` (200).
> Tests : `npm run test:run` → **42/42** verts (`lib/finance/**` + `lib/diagnostic/**` + `lib/validation/**`).

| Phase | Contenu | Statut |
|---|---|---|
| 0 | Plan, DA, CLAUDE.md | ✅ Validé |
| 1 | Scaffolding, tokens, layout, header/footer, i18n FR | ✅ Livré — une page (`/fr`) prouve la charte |
| 2 | Moteur de calcul + tests | ✅ Livré — 27 tests, arrondi centime, TAEG actuariel |
| 3 | Simulateur + pré-diagnostic (signature) | ✅ Livré — `/simulateur` + `/pre-diagnostic`, 9 tests règles |
| 4 | Page d'accueil | ✅ Livré — home FR complète (11 blocs), data-driven crédits |
| 5 | Template crédit + 14 pages data-driven | ✅ Livré — 22 pages statiques, template unique, encadré calculé |
| 6 | Formulaire multi-étapes + confirmation | ✅ Livré — 5 étapes RHF+Zod, session, honeypot+rate-limit, confirmation |
| 7 | Blog, FAQ, légal, contact | ✅ Livré — 36 pages, cookies RGPD, légal = données pays |
| 8 | Les 9 autres langues | ✅ Livré — **10 langues** complètes et prérendues (UI + marketing + légal + régulateur national ; BG cyrillique OK). Reste : slugs d'URL traduits + corps produits/blog longs (repli FR) |
| 9 | Perf, SEO, a11y, RGPD, recette | ⬜ |
