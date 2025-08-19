import type { Metadata } from "next";
import { MantineProvider } from '@mantine/core';
import { DM_Sans, Outfit } from 'next/font/google'
import ContainerLayout from './containerlayout';

import "../styles/mainstyle.sass";
import '@mantine/core/styles.css'

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
export const metadata: Metadata = {
  title: "C. Alberto Martínez - Portfolio",
  description: "Desarrollador web con más de 10 años de experiencia, me he especializado en áreas como el marketing digital y el comercio electrónico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className={`${dmSans.className} ${outfit.className}`}>
        <MantineProvider>
          <main className="mainLayout">
            <ContainerLayout>
              {children}
            </ContainerLayout>
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}
