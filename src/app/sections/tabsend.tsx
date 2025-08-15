import { Blockquote, Table, Accordion, AccordionItem, AccordionControl, AccordionPanel, TableTbody, TableThead, TableTr, TableTh, TableTd } from '@mantine/core';

export default function TabsEnd() {
  // Datos reales del CV: idiomas, cursos y certificaciones
  const items = [
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
      name: 'Curso completo Ruby – Desde las Bases hasta Rails',
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
  ];
  const rows = items.map((item, idx) => (
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
          Idiomas, cursos y certificados
        </Blockquote>
        <br />
        <div className="tabEnd--table">
          <Table striped highlightOnHover withTableBorder>
            <TableThead>
              <TableTr>
                <TableTh>Categoría</TableTh>
                <TableTh>Nombre</TableTh>
                <TableTh>Detalles</TableTh>
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