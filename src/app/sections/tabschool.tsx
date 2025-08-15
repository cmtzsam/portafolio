import { Blockquote, Accordion, AccordionItem, AccordionControl, AccordionPanel } from '@mantine/core';

export default function TabSchool() {
  const data = [
    {
      emoji: '🎓',
      value: 'Maestria',
      career: 'Maestría en Inteligencia Artificial',
      schoolname: 'Tecnológico de Monterrey',
      place: 'Universidad Tecnológico de Monterrey',
      fecha: '2025',
    },
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
  ];  
  const items = data.map((item) => (
    <AccordionItem key={item.value} value={item.value}>
      <AccordionControl >
        <h3 className='schoolName'>{item.career}</h3>
      </AccordionControl>
      <AccordionPanel>
        <div className="schoolInfo">
        <p>
          {item.schoolname} <br />
          <span>{item.place}</span>
        </p>
        <p>{item.fecha}</p>          
        </div>
      </AccordionPanel>
    </AccordionItem>
  ));
  return (
    <section className="contentPage--section tabSchool">
      <Blockquote color="teal"  mt="xl">
        Educación
      </Blockquote>
      <br />
      <Accordion defaultValue="Maestria">
        {items}
      </Accordion>      
    </section>
  );
}