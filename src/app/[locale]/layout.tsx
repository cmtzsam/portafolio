import {notFound} from 'next/navigation';
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
// import {clsx} from 'clsx';
import {routing} from '@/i18n/routing';

import type { Metadata } from 'next';

// import type { Metadata } from "next";
import { MantineProvider } from '@mantine/core';
import { DM_Sans, Outfit } from 'next/font/google'
import ContainerLayout from '../containerlayout';
import Script from "next/script";

import "../../styles/mainstyle.sass";
import '@mantine/core/styles.css'


export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap'
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap'
})

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'LocaleLayout'
  });

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({
  children,
  params
}: LayoutProps<'/[locale]'>) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-R3NECQ5Z6V"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R3NECQ5Z6V');
        `}
      </Script>      
      <body className={`${dmSans.className} ${outfit.className}`}  >
        <NextIntlClientProvider>
          <MantineProvider>       

            <main className="mainLayout">
              <ContainerLayout>
                {children}
              </ContainerLayout>
            </main>            
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}