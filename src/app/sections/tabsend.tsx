'use client';
import { Blockquote, Table, TableTbody, TableThead, TableTr, TableTh, TableTd } from '@mantine/core';
import { useTranslations, useLocale } from 'next-intl';

const items: Record<'es' | 'en', Array<{
  category: string;
  name: string;
  details: string;
}>> = {
  es: [
    {
      category: 'Idioma',
      name: 'Español',
      details: 'Nativo',
    },
    {
      category: 'Idioma',
      name: 'Inglés',
      details: 'Intermedio B2',
    },
    {
      category: 'Certificación',
      name: 'Curso completo Ruby - Desde las Bases hasta Rails',
      details: 'Udemy, Jul. 2024',
    },
    {
      category: 'Certificación',
      name: 'Inbound Marketing',
      details: 'HubSpot, Jul. 2023; Vence Ago. 2026',
    },
    {
      category: 'Certificación',
      name: 'Software de Marketing',
      details: 'HubSpot, Jul. 2023; Vence Ago. 2026',
    },
    {
      category: 'Certificación',
      name: 'Gatsby de cero a experto',
      details: 'Udemy, Mar. 2023',
    },
  ],
  en: [
    {
      category: 'Language',
      name: 'Spanish',
      details: 'Native',
    },
    {
      category: 'Language',
      name: 'English',
      details: 'Intermediate B2',
    },
    {
      category: 'Certification',
      name: 'Complete Ruby Course - From Basics to Rails',
      details: 'Udemy, Jul. 2024',
    },
    {
      category: 'Certification',
      name: 'Inbound Marketing',
      details: 'HubSpot, Jul. 2023; Expires Aug. 2026',
    },
    {
      category: 'Certification',
      name: 'Marketing Software',
      details: 'HubSpot, Jul. 2023; Expires Aug. 2026',
    },
    {
      category: 'Certification',
      name: 'Gatsby from Zero to Expert',
      details: 'Udemy, Mar. 2023',
    },
  ],
}

export default function TabsEnd() {

  const t = useTranslations('TabEnd');

  // Datos reales del CV: idiomas, cursos y certificaciones
  const locale = useLocale() as 'es' | 'en';
  const data = items[locale] || items.es;
  const rows = data.map((item, idx) => (
    <TableTr key={item.category + item.name + idx}>
      <TableTd>{item.category}</TableTd>
      <TableTd>{item.name}</TableTd>
      <TableTd>{item.details}</TableTd>
    </TableTr>
  ));
  return (
    <>
      <section className="contentPage--section tabEnd">
        <Blockquote color="teal" mt="xl">
          {t('title')}
        </Blockquote>
        <br />
        <div className="tabEnd--table">
          <Table striped highlightOnHover withTableBorder>
            <TableThead>
              <TableTr>
                <TableTh>{t('tableTitle_1')}</TableTh>
                <TableTh>{t('tableTitle_2')}</TableTh>
                <TableTh>{t('tableTitle_3')}</TableTh>
              </TableTr>
            </TableThead>
            <TableTbody>{rows}</TableTbody>
          </Table>
        </div>
      </section>
      <br />
    </>
  );
}