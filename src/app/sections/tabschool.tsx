'use client'
import { Blockquote, Accordion, AccordionItem, AccordionControl, AccordionPanel } from '@mantine/core';
import {useLocale} from 'next-intl';

const dataByLocale: Record<'es' | 'en', Array<{
  emoji: string;
  value: string;
  career: string;
  schoolname: string;
  place: string;
  fecha: string;
}>> = {
  es: [
    {
      emoji: '🎓',
      value: 'Universidad',
      career: 'Ingeniería en Sistemas',
      schoolname: 'Facultad de Ingeniería Mecánica y Eléctrica',
      place: 'Universidad Autónoma de Nuevo León',
      fecha: '2015 - 2021',
    },
    {
      emoji: '🎓',
      value: 'Carrera',
      career: 'Técnico en Programación Web',
      schoolname: 'Escuela industrial Álvaro Obregón',
      place: 'Universidad Autónoma de Nuevo León',
      fecha: '2011 - 2014',
    },
  ],
  en: [
    {
      emoji: '🎓',
      value: 'University',
      career: 'Computer Systems Engineering',
      schoolname: 'Faculty of Mechanical and Electrical Engineering (FIME)',
      place: 'Universidad Autónoma de Nuevo León',
      fecha: '2015 - 2021',
    },
    {
      emoji: '🎓',
      value: 'Program',
      career: 'Web Programming Technician',
      schoolname: 'Álvaro Obregón Industrial School',
      place: 'Universidad Autónoma de Nuevo León',
      fecha: '2011 - 2014',
    },
  ],
};

export default function TabSchool() {
  const locale = useLocale() as 'es' | 'en';
  const data = dataByLocale[locale] || dataByLocale.es;

  const items = data.map((item) => (
    <AccordionItem key={item.value} value={item.value}>
      <AccordionControl>
        <h3 className='schoolName'>{item.career}</h3>
      </AccordionControl>
      <AccordionPanel>
        <div className="schoolInfo">
          <p className='schoolInfo--name'>
            {item.schoolname} <br />
            <span>{item.place}</span>
          </p>
          <p className='schoolInfo--date'>{item.fecha}</p>
        </div>
      </AccordionPanel>
    </AccordionItem>
  ));

  return (
    <section className="contentPage--section tabSchool">
      <Blockquote color="teal" mt="xl">
        {locale === 'en' ? 'Education' : 'Educación'}
      </Blockquote>
      <br />
      <Accordion defaultValue={data[0]?.value}>
        {items}
      </Accordion>
    </section>
  );
}