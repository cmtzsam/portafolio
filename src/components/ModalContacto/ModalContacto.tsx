"use client";

import { Modal, MantineSize, ScrollArea } from '@mantine/core';
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
      radius={radius}
      padding={padding}
      overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
      yOffset="6vh"
      withCloseButton
      withinPortal
      lockScroll
      trapFocus
      scrollAreaComponent={ScrollArea.Autosize}
      keepMounted
      closeOnClickOutside={false}   
    >
      <div style={{ width: '100%', maxWidth: 800, marginInline: 'auto', minHeight: 300 }}>
        {children}
      </div>
    </Modal>
  );
};

export default ModalContacto;