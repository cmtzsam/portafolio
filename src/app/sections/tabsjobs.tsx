import { Blockquote, Text, Timeline, TimelineItem } from '@mantine/core';

const jobs = [
  {
    title: 'Coordinador de Programación Web',
    company: 'Tecnológico de Monterrey',
    period: 'Nov. 2024 – Presente',
    description: 'Lidero al equipo web y formularios digitales; Programación en Ruby on Rails, brindo soporte, mantenimiento y optimización del sitio.'
  },
  {
    title: 'Desarrollador Full Stack',
    company: 'Universidad Tecmilenio',
    period: 'Dic. 2021 – Dic. 2024',
    description: 'Desarrollo y mantenimiento de plataforma institucional; integración de módulos con Laravel y Drupal.'
  },
  {
    title: 'Shopify Developer & Specialist',
    company: 'Infracommerce Latam',
    period: 'Jul. 2021 – Dic. 2021',
    description: 'Interfaces de tienda y optimización UX/UI con Liquid.'
  },
  {
    title: 'Front-End Developer',
    company: 'Consultores Web',
    period: 'Mar. 2015 – Jun. 2021',
    description: 'Sitios corporativos y plantillas de correo; coordinación de equipo de desarrollo.'
  },
  {
    title: 'Programador Web Jr.',
    company: 'Electrónica Tapia',
    period: 'Nov. 2014 – Feb. 2015',
    description: 'Diseño de banners y soporte técnico.'
  },
  {
    title: 'Programador Web Jr.',
    company: 'Widagg',
    period: 'Jun. 2014 – Oct. 2014',
    description: 'Desarrollo web y campañas de email masivo.'
  },
];

export default function TabJobs() {
  return (
    <section className="contentPage--section tabJobs">
      <Blockquote color="teal" mt="xl">
        Trayectoria profesional
      </Blockquote>
      <br />
      <div className="tabJobs--timeLine">
        <Timeline color="teal" active={jobs.length} bulletSize={26} lineWidth={4}>
          {jobs.map((job, i) => (
            <TimelineItem key={i} title={`${job.title}`}>
              <Text c="dimmed" size="md">
                {job.company}
              </Text>
              <Text c="dimmed" size="sm">
                {job.description}
              </Text>
              <Text size="xs" mt={4}>{job.period}</Text>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}