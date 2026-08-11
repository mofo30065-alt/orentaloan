import { getTranslations } from 'next-intl/server';
import { getCountryLegal } from '@/data/countries';
import { IconPhone } from '@/components/common/icons';

/**
 * Bouton flottant d'appel direct (tel:), au-dessus du bouton WhatsApp.
 * Le numéro provient des données pays. Pastille de marque (violet).
 */
export async function CallFab({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'common.phone' });
  const country = getCountryLegal(locale);
  const number = country.contact.phone;
  if (!number) return null;

  return (
    <a
      href={`tel:${number}`}
      aria-label={t('label')}
      className="fixed bottom-[5.75rem] right-lg z-40 flex h-14 w-14 items-center justify-center rounded-pill bg-brand text-on-brand shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <IconPhone className="h-7 w-7" />
    </a>
  );
}
