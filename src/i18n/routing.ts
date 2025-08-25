import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'es',
  localePrefix: 'as-needed', // /  usa ES sin prefijo, /en para inglés
  pathnames: {
    '/': '/',
    '/pathnames': {
      es: '/pfadnamen'
    }
  }
});