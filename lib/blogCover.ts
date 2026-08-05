/**
 * Illustration de couverture propre à chaque article (une photo unique par slug,
 * jamais répétée). Repli sur une image générique pour un slug non répertorié.
 */
const KNOWN = new Set([
  'comprendre-inscription-ficp',
  'rachat-credit-hypothecaire-guide',
  'taux-endettement-35-pourcent',
  'taeg-ou-taux-debiteur',
  'co-emprunteur-ou-caution',
  'dossier-independant-sans-bilans',
  'emprunter-apres-60-ans',
  'financer-un-projet-avec-cdd-interim',
  'apport-personnel-role',
  'rachat-ou-nouveau-credit',
  'assurance-emprunteur-facultative',
  'preparer-son-dossier-documents',
]);

export function blogCover(slug: string): string {
  const key = KNOWN.has(slug) ? slug : '_default';
  return `/images/photos/articles/${key}.jpg`;
}
