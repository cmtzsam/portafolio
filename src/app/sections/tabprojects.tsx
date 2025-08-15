'use client'
import { useState, useRef } from 'react';
import { Spoiler, Grid, Blockquote, FloatingIndicator, Tabs, Card, Image, Text, Badge, Button, Group, Modal } from '@mantine/core';
import classes from './Demo.module.css';
import { useDisclosure } from '@mantine/hooks';

type Project = {
  id: string;
  title: string;
  image: string;
  enlace: string;
  type: 'tienda' | 'informativo';
  pildoras: string[];
  description: string;
  modalContent: string[];
};

const projects: Project[] = [
  {
    id: '1',
    title: 'Kids Heroes',
    image: 'https://codificarlos.com/wp-content/uploads/2025/03/proy1.jpg',
    enlace: 'https://kidsheroes.com.mx',
    type: 'tienda',
    pildoras: ['Comercio eléctronico', 'WordPress & WooCommerce', 'JavaScript', 'PHP'],
    description:
      'Desarrolle un sitio web dinámico y altamente funcional utilizando WordPress y WooCommerce como base, con el objetivo de ofrecer una experiencia de usuario fluida, rápida y centrada en la conversión.',
    modalContent: [
      'Desde el inicio, me enfoque en construir una tienda en línea que no solo reflejara la identidad visual de la marca, sino que también facilitara cada paso del proceso de compra.',
      'Para lograrlo, implemente tecnologías modernas como Bootstrap 5, SCSS y JavaScript, lo cual permitio construir un diseño responsivo, atractivo y adaptable a todo tipo de dispositivos.',
      'Cada sección del sitio fue personalizada para alinearse con los objetivos de negocio de Kidsheroes, haciendo especial énfasis en la navegación intuitiva y la comunicación clara de los beneficios.'
    ]
  },
  {
    id: '2',
    title: 'Dr. Robert Rivera',
    image: 'https://codificarlos.com/wp-content/uploads/2025/05/drrobertrivera.avif',
    enlace: 'https://robertrivera-maxilofacial.com/',
    type: 'informativo',
    pildoras: ['Sitio informativo', 'WordPress', 'JavaScript', 'PHP'],
    description: 'Desarrollé el sitio web informativo del Dr. Robert Rivera, reconocido especialista en cirugía maxilofacial, utilizando WordPress como plataforma principal por su flexibilidad, escalabilidad y facilidad de gestión.',
    modalContent: [
      'El proyecto partió de un diseño previamente aprobado, el cual fue cuidadosamente adaptado y codificado para garantizar una experiencia moderna, clara y totalmente accesible desde cualquier dispositivo, cumpliendo con estándares actuales de usabilidad y diseño responsivo.',
      'La arquitectura del sitio se estructuró estratégicamente para resaltar los servicios clave que ofrece el doctor, así como sus credenciales profesionales, experiencia y la ubicación exacta de su consultorio. Se integraron formularios personalizados de contacto y botones de llamada a la acción que permiten a los visitantes agendar citas de manera rápida, mejorando así la tasa de conversión y facilitando el proceso de atención al paciente.',
      'Se cuidó cada detalle visual para mantener coherencia con la identidad de marca del Dr. Rivera, utilizando una paleta de colores sobria y profesional, tipografías legibles y una jerarquía visual que guía al usuario de manera natural a través del contenido. También se aplicaron buenas prácticas de optimización SEO, incluyendo carga rápida, estructura semántica correcta, uso de etiquetas meta y adaptación para dispositivos móviles, asegurando así un mejor posicionamiento en buscadores y mayor visibilidad en línea.',
      'El resultado es un sitio web profesional y confiable, que comunica autoridad médica, inspira confianza en pacientes potenciales y se convierte en una herramienta clave para consolidar la presencia digital del Dr. Robert Rivera en su sector.'
    ]
  },
  {
    id: '3',
    title: 'Conversa',
    image: 'https://codificarlos.com/wp-content/uploads/2025/03/proy2.jpg',
    enlace: 'https://conversamanagement.com.mx/',
    type: 'informativo',
    pildoras: ['Sitio informativo', 'WordPress', 'JavaScript', 'PHP'],
    description: 'Programe el sitio web en WordPress de tipo onepage, diseñado para comunicar de manera clara y profesional los servicios de la empresa.',
    modalContent: [
      'El sitio web funciona bajo la plataforma WordPress, utilizando una estructura tipo onepage enfocada en comunicar de forma clara, directa y estratégica los servicios de la empresa. Nuestro objetivo fue crear una presencia digital sólida que no solo transmita confianza, sino que impulse la conversión de visitantes en clientes reales.',
      'El diseño fue cuidadosamente estructurado para ofrecer una navegación intuitiva y fluida, pensando en la experiencia del usuario desde cualquier dispositivo. Se utilizaron principios de usabilidad y jerarquía visual para facilitar el acceso rápido a la información más relevante, mejorando la retención y el tiempo de permanencia en el sitio.',
      'Se integro una identidad visual moderna y funcional, alineada con la marca, que refuerza su personalidad digital y destaca sus principales fortalezas frente a la competencia. El diseño responsivo garantiza una visualización óptima tanto en computadoras de escritorio como en tablets y smartphones.'
    ]
  }
  // Agrega más proyectos aquí
];

export default function TabProjects() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>('1');

  const controlsRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const setControlRef = (val: string) => (node: HTMLButtonElement | null) => {
    controlsRefs.current[val] = node;
  };

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
    open();
  };

  const renderCards = (filter?: Project['type']) => {
    return (
      <Grid>
        {projects
          .filter(p => !filter || p.type === filter)
          .map(p => (
            <Grid.Col key={p.id} span={{ sm: 12, md: 6, lg: 6 }}>
              <Card shadow="sm" padding="lg" radius="md" withBorder className='tabProjectsSection--card'>
                <Card.Section>
                  <Image src={p.image} height={250} alt={p.title} />
                </Card.Section>
                <Group justify="space-between"  className='tabProjectsSection--title'>
                  <h3>{p.title}</h3>
                  <Badge color='gray'>
                    {p.type === 'tienda' ? 'Tienda online' : 'Sitio informativo'}
                  </Badge>
                </Group>
                <div className='tabProjectsSection--desc'> 
                  <Spoiler maxHeight={80} showLabel="Leer más" hideLabel="Leer menos">
                    <p>
                      {p.description}
                    </p>
                  </Spoiler>
                </div>
                <Group justify="center" align="center" className='tabProjectsSection--btns'> 
                  <Grid w="100%">
                  <Grid.Col span={{ sm: 12, md: 6, lg: 6 }}>
                    <Button
                    color="teal"
                    fullWidth
                    radius="md"
                    onClick={() => handleOpen(p)}
                    >
                    Más información
                    </Button>
                  </Grid.Col>
                  <Grid.Col span={{ sm: 12, md: 6, lg: 6 }}>
                    <Button
                    color='teal'
                    variant="subtle"
                    fullWidth
                    radius="md"
                    component="a"
                    href={p.enlace}
                    target="_blank"
                    rel="noopener noreferrer"                      
                    >
                    Ver el sitio
                    </Button>
                  </Grid.Col>
                  </Grid>
                </Group>
              </Card>
            </Grid.Col>
          ))}
      </Grid>
    );
  };

  return (
    <section className="contentPage--section tabProjectsSection">
      <Blockquote color="teal" mt="xl">
        Proyectos recientes
      </Blockquote>
      <br />

      <Tabs variant="none" value={value} onChange={setValue} className="tabProjectsSection--tabs">
        <Tabs.List ref={setRootRef} className={classes.list}>
          <Tabs.Tab value="1" ref={setControlRef('1')} className={classes.tab}>
            Todos
          </Tabs.Tab>
          <Tabs.Tab value="2" ref={setControlRef('2')} className={classes.tab}>
            Tienda online
          </Tabs.Tab>
          <Tabs.Tab value="3" ref={setControlRef('3')} className={classes.tab}>
            Sitio informativo
          </Tabs.Tab>

          <FloatingIndicator
            target={value ? controlsRefs.current[value] : null}
            parent={rootRef}
            className={classes.indicator}
          />
        </Tabs.List>

        <Tabs.Panel value="1">{renderCards()}</Tabs.Panel>
        <Tabs.Panel value="2">{renderCards('tienda')}</Tabs.Panel>
        <Tabs.Panel value="3">{renderCards('informativo')}</Tabs.Panel>
      </Tabs>

      <Modal
        opened={opened}
        onClose={close}
        size="xl"
        centered
        className="modalCustom"
      >
        {selectedProject && (
          <Card padding="xl">
            <Card.Section>
              <Image src={selectedProject.image} h={340} alt={selectedProject.title} />
            </Card.Section>
            <h2>
              {selectedProject?.title}
            </h2>

            <div className="modalCustom--text">
              {selectedProject.modalContent.map((text, idx) => (
              <p key={idx} >
                {text}
              </p>
            ))}
            </div>
            <Group gap="xs" mb="md">
              {selectedProject.pildoras.map((pildora, idx) => (
                <Badge key={idx} color="blue" variant="light">
                  {pildora}
                </Badge>
              ))}
            </Group>            
          </Card>
        )}
      </Modal>
    </section>
  );
}