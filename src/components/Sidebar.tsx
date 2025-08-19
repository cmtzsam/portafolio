'use client';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Grid, Flex } from '@mantine/core';
import BotonCorreo from './BotonCorreo';
import "../styles/sidebar.sass";

const Sidebar = () => {
  return (
    <aside className="sideBarProfile">
      <div className="sideBarProfile--picture">
        <Image
          src="/carlos.png"
          alt="Carlos Martinez"
          width={384}
          height={576}
          className="sideBarProfile--img"
          priority
        />
      </div>
      <div className="sideBarProfile--info">
        {process.env.NEXT_PUBLIC_NAME && <h1>{process.env.NEXT_PUBLIC_NAME}</h1>}
        <div className="sideBarProfile--dataTable">
          <div className="sideBarProfile--dataTable-line "> 
            <Grid>
              <Grid.Col span={4}>
                <span className='sideBarProfile--dataTable-ques' >Ubicación</span>
              </Grid.Col>
              <Grid.Col span={8}>
                <span className='sideBarProfile--dataTable-ans'>Monterrey, México</span>
              </Grid.Col>
            </Grid>
          </div>
          <div className="sideBarProfile--dataTable-line "> 
            <Grid>
              <Grid.Col span={4}>
                <span className='sideBarProfile--dataTable-ques' >Email</span>
              </Grid.Col>
              <Grid.Col span={8}>
                <span className='sideBarProfile--dataTable-ans'>cmtz.sam@outlook.com</span>
              </Grid.Col>
            </Grid>
          </div>
          <div className="sideBarProfile--dataTable-line "> 
            <Grid>
              <Grid.Col span={4}>
                <span className='sideBarProfile--dataTable-ques' >Redes</span>
              </Grid.Col>
              <Grid.Col span={8}>
                <Flex 
                  justify="flex-end"
                  align="center"                
                  className="socialgrid"
                >
                  <a href="https://github.com/cmtzsam/" target='_blank'><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/cams310196/" target='_blank'><FaLinkedin /></a>
                  {/* <a href="#!" target='_blank'><FaFacebook /></a> */}
                </Flex>
              </Grid.Col>
            </Grid>
          </div>
        </div>
        <div className='py-4'>
          <BotonCorreo size="lg" />
        </div>
        <p className="sideBarProfile--endText">
          © 2025. Todos los derechos reservados.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;