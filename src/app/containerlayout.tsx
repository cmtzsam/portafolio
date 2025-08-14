'use client'
import Sidebar from "../components/Sidebar";
import { Container, Grid } from '@mantine/core';

export default function ContainerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container 
      strategy="grid" 
      size={1180}
      
      >
      <Grid
        className="containerLayout--grid"
        gutter="0"
      >
        <Grid.Col span={{ sm: 12, md: 5, lg: 4 }}>
          <Sidebar />
        </Grid.Col>
        <Grid.Col span={{ sm: 12, md: 7, lg: 8 }}>

          {children}
          
        </Grid.Col>
      </Grid>
    </Container>
  );
}