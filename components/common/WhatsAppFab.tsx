import { getTranslations } from 'next-intl/server';
import { getCountryLegal } from '@/data/countries';
import { IconWhatsApp } from '@/components/common/icons';

/**
 * Bouton flottant d'accès direct à une discussion WhatsApp.
 * Le numéro provient des données pays ; le message est pré-rempli via i18n.
 * Vert de marque WhatsApp (exception assumée : identité d'un service tiers reconnaissable).
 */
export async function WhatsAppFab({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'common.whatsapp' });
  const country = getCountryLegal(locale);
  const number = country.contact.whatsapp.replace(/\D/g, '');
  if (!number) return null;

  const href = `https://wa.me/${number}?text=${encodeURIComponent(t('prefill'))}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('aria')}
      className="fixed bottom-lg right-lg z-40 flex h-14 w-14 items-center justify-center rounded-pill bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
