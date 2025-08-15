import { Blockquote, Spoiler, Badge } from '@mantine/core';
export default function TabAbout() {
  return (
    <section className="contentPage--section tabAbout">
      <Blockquote color="teal"  mt="xl">
        Acerca de mi
      </Blockquote>
      <h2>
        ¡Hola! Soy Carlos,
      </h2>
      <Spoiler maxHeight={120} showLabel="Ver más" hideLabel="Ver menos">
        <p>
          Soy un desarrollador web con más de 10 años de experiencia, me he especializado en áreas como el marketing digital y el comercio electrónico. Durante mi trayectoria, he colaborado con diversas organizaciones, enfocándome en la creación y el mantenimiento de sitios web de alto nivel, así como en el diseño y desarrollo de landing pages y soluciones web personalizadas.
        </p>
        <p>
          Mis habilidades técnicas incluyen un dominio sólido de tecnologías front-end como HTML (Jade-Pug), CSS (SASS/SCSS/Less) y JavaScript (Webpack, Gulp, Vue). Además, poseo conocimientos básicos en el ámbito del back-end, principalmente en PHP (Laravel), y un nivel intermedio de experiencia en Wordpress. En cuanto a plataformas CMS, soy un experto en HubSpot, trabajando con ella desde el año 2015 hasta la fecha, y también cuento con un amplio conocimiento en Shopify.
        </p>
        <p>
          Mi experiencia se complementa con un conjunto de habilidades en diseño, utilizando herramientas como Photoshop, Adobe XD, Figma y Sketch.
        </p>
      </Spoiler>
      <div className="pillsList">
      <h4>Me especializo en</h4>
        {['Shopify', 'WordPress', 'Woocommerce', 'React.js', 'Next.js', 'Vue.Js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SASS', 'PHP', 'Laravel', 'HubSpot'].map((skill) => (
          <Badge 
          size='md' 
          key={skill}
          variant="gradient"
          gradient={{ from: '#D6FAC8', to: '#FDEDD8', deg: 90 }}
          className="pillsList--pill"
          >{skill}</Badge>
        ))}
      </div>
    </section>
  );
}
