"use client";

import { Modal, MantineSize, ScrollArea, Box } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface ModalContactoProps {
  modalContactoId: string;
  opened: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  size?: MantineSize | number | string;
  centered?: boolean;
  children?: React.ReactNode;
  /** Hace fullscreen en pantallas pequeñas automáticamente */
  fullScreenOnMobile?: boolean;
  /** Radio del modal */
  radius?: number | string;
  /** Padding interno del modal */
  padding?: number | string;
}

const ModalContacto = ({
  modalContactoId,
  opened,
  onClose,
  title,
  size = 'lg',
  centered = true,
  children,
  fullScreenOnMobile = true,
  radius = 'md',
  padding = 'md',
}: ModalContactoProps) => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const fullScreen = fullScreenOnMobile && isMobile;

  return (
    <Modal
      id={modalContactoId}
      opened={opened}
      onClose={onClose}
      title={title}
      size={fullScreen ? '100%' : size}
      fullScreen={fullScreen}
      centered={centered}
      radius={fullScreen ? 0 : radius}
      overlayProps={{ backgroundOpacity: 0.55, blur: fullScreen ? 0 : 3 }}
      yOffset={fullScreen ? 0 : '1vh'}
      padding={fullScreen ? 0 : padding}
      styles={{
        content: fullScreen
          ? {
              height: '100svh',
              maxHeight: '100svh',
              display: 'flex',
              flexDirection: 'column',
            }
          : undefined,
        body: fullScreen
          ? {
              padding: '12px',
              paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
              flex: 1,
              overflowY: 'scroll',
              WebkitOverflowScrolling: 'touch',
            }
          : undefined,
        header: fullScreen ? { padding: '12px 12px 0 12px' } : undefined,
      }}
      withCloseButton
      withinPortal
      lockScroll
      trapFocus
      scrollAreaComponent={Box}
      keepMounted
      closeOnClickOutside={false}   
    >
      <div style={{ width: '100%', maxWidth: fullScreen ? '100%' : 800, marginInline: 'auto' }}>
        {children}
      </div>
    </Modal>
  );
};

export default ModalContacto;