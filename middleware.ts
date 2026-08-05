import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Tout sauf les routes techniques et les fichiers avec extension.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
