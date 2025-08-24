import { Button } from '@mantine/core'
import { IconMail } from '@tabler/icons-react'

interface BotonCorreoProps {
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  label?: string;
}

export default function BotonCorreo({ href, size = 'md', onClick, label = "Contacto" }: BotonCorreoProps) {
  return (
    <Button
      component={href ? "a" : "button"}
      href={href}
      size={size}
      fullWidth
      variant="gradient"
      gradient={{ from: '#D6FAC8', to: '#FDEDD8', deg: 90 }}
      leftSection={<IconMail size={18} />}
      c="#2F9B66"
      className='boton-correo'
      onClick={onClick}
    >
      {label}
    </Button>
  )
}