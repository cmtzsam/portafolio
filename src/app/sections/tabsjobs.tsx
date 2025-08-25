'use client';
import { Blockquote, Text, Timeline, TimelineItem } from '@mantine/core';
import { useLocale } from 'next-intl';

const jobsArrayByLocale: Record<'es' | 'en', Array <{
title: string;
company: string;
period: string;
description:  string;
}>> = {
  es: [
    {
      title: 'Coordinador de Programación Web',
      company: 'Tecnológico de Monterrey',
      period: 'Nov. 2024 - Presente',
      description: 'Lidero al equipo web y formularios digitales; Programación en Ruby on Rails, brindo soporte, mantenimiento y optimización del sitio.'
    },
    {
      title: 'Desarrollador Full Stack',
      company: 'Universidad Tecmilenio',
      period: 'Dic. 2021 - Dic. 2024',
      description: 'Desarrollo y mantenimiento de plataforma institucional; integración de módulos con Laravel y Drupal.'
    },
    {
      title: 'Shopify Developer & Specialist',
      company: 'Infracommerce Latam',
      period: 'Jul. 2021 - Dic. 2021',
      description: 'Interfaces de tienda y optimización UX/UI con Liquid.'
    },
    {
      title: 'Front-End Developer',
      company: 'Consultores Web',
      period: 'Mar. 2015 - Jun. 2021',
      description: 'Sitios corporativos y plantillas de correo; coordinación de equipo de desarrollo.'
    },
    {
      title: 'Programador Web Jr.',
      company: 'Electrónica Tapia',
      period: 'Nov. 2014 - Feb. 2015',
      description: 'Programación web en PHP y soporte técnico.'
    },
    {
      title: 'Programador Web Jr.',
      company: 'Widagg',
      period: 'Jun. 2014 - Oct. 2014',
      description: 'Programación web y campañas de email marketing.'
    },
  ],
  en: [
    {
      title: 'Web Programming Coordinator',
      company: 'Tecnológico de Monterrey',
      period: 'Nov 2024 - Present',
      description: 'Lead web and digital forms team. Program in Ruby on Rails. Provide site support, maintenance, and optimization.'
    },
    {
      title: 'Full-Stack Developer',
      company: 'Universidad Tecmilenio',
      period: 'Dec 2021 - Dec 2024',
      description: 'Developed and maintained institutional platform. Integrated modules using Laravel and Drupal.'
    },
    {
      title: 'Shopify Developer & Specialist',
      company: 'Infracommerce Latam',
      period: 'Jul 2021 - Dec 2021',
      description: 'Built storefront interfaces and optimized UX/UI using Liquid.'
    },
    {
      title: 'Front-End Developer',
      company: 'Consultores Web',
      period: 'Mar 2015 - Jun 2021',
      description: 'Created corporate websites and email templates. Coordinated development team.'
    },
    {
      title: 'Junior Web Developer',
      company: 'Electrónica Tapia',
      period: 'Nov 2014 - Feb 2015',
      description: 'Web programming in PHP and technical support.'
    },
    {
      title: 'Junior Web Developer',
      company: 'Widagg',
      period: 'Jun 2014 - Oct 2014',
      description: 'Web programming and email marketing campaigns.'
    },
  ]
}


export default function TabJobs() {
  const locale = useLocale() as 'es' | 'en';
  const data = jobsArrayByLocale[locale] || jobsArrayByLocale.es;
  const itemsTimeLine = data.map((job, i) => (
    <TimelineItem key={i} title={`${job.title}`}>
      <Text c="dimmed" size="md">
        {job.company}
      </Text>
      <Text c="dimmed" size="sm">
        {job.description}
      </Text>
      <Text size="xs" mt={4}>{job.period}</Text>
    </TimelineItem>
  ));

  return (
    <section className="contentPage--section tabJobs">
      <Blockquote color="teal" mt="xl">
        Trayectoria profesional
      </Blockquote>
      <br />
      <div className="tabJobs--timeLine">
        <Timeline color="teal" active={data.length} bulletSize={26} lineWidth={4}>
          {itemsTimeLine}
        </Timeline>
      </div>
    </section>
  );
}