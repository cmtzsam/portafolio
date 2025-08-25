'use client';
import {useTranslations} from 'next-intl';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Grid, Flex } from '@mantine/core';
import ModalContacto from './ModalContacto/ModalContacto';
import HubspotEmbed from './HubspotEmbed/HubspotEmbed';
import Navigation from './Navigation';
import BotonCorreo from './BotonCorreo';
import "../styles/sidebar.sass";

const Sidebar = () => {
  const [opened, setOpened] = useState(false);
  const t = useTranslations('Sidebar');

  return (
    <>
    <aside className="sideBarProfile" >
      <Navigation />
      <div className="sideBarProfile--sidebarBox">
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
                  <span className='sideBarProfile--dataTable-ques' >{t('sblocation')}</span>
                </Grid.Col>
                <Grid.Col span={8}>
                  <span className='sideBarProfile--dataTable-ans'>Monterrey, México</span>
                </Grid.Col>
              </Grid>
            </div>
            <div className="sideBarProfile--dataTable-line "> 
              <Grid>
                <Grid.Col span={4}>
                  <span className='sideBarProfile--dataTable-ques' >{t('sbemail')}</span>
                </Grid.Col>
                <Grid.Col span={8}>
                  <span className='sideBarProfile--dataTable-ans'>cmtz.sam@outlook.com</span>
                </Grid.Col>
              </Grid>
            </div>
            <div className="sideBarProfile--dataTable-line "> 
              <Grid>
                <Grid.Col span={4}>
                  <span className='sideBarProfile--dataTable-ques' >{t('sbsocial')}</span>
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
            <BotonCorreo 
              size="lg" 
              onClick={() => setOpened(true)}
              label={t('sbsendmsg')}
            />
            <ModalContacto
              modalContactoId="modal-contacto"
              opened={opened}
              onClose={() => setOpened(false)}
              title={`📩 ${t('sbsendmsg')}`}
              centered
              size="lg"
              fullScreenOnMobile
              radius="md"
              padding="md"
            >
              <div style={{ paddingTop: 8 }}>
                <HubspotEmbed
                  region="na1"
                  portalId="45329697"
                  formId={t('sbhubspotid')}
                />
              </div>
            </ModalContacto>
          </div>
          <p className="sideBarProfile--endText">
            {t('sbcopyright')}
          </p>
        </div>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;