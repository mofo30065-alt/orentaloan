import { Space_Grotesk, Roboto, Roboto_Mono } from 'next/font/google';

/**
 * Typographie inspirée à 100 % de younited.com (Roc Grotesk + Roboto),
 * avec substituts open self-hostables via next/font :
 *  - Titrage  : Space Grotesk (esprit Roc Grotesk). Swap vers Roc Grotesk possible (licence).
 *  - Texte    : Roboto (identique à Younited ; cyrillique OK pour le bulgare en phase 8).
 *  - Chiffres : Roboto Mono pour les tableaux/données (registre grand-livre).
 */
export const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const fontSans = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const fontMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
