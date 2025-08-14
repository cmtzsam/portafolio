import { Button } from '@mantine/core'
import { IconMail } from '@tabler/icons-react'

export default function BotonCorreo({ size }: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <Button
      component="a"
      href="mailto:cmtz.sam@outlook.com"
      size={size || 'md'}
      fullWidth
      variant="gradient"
      gradient={{ from: '#D6FAC8', to: '#FDEDD8', deg: 90 }}
      leftSection={<IconMail size={18} />}
      c="#2F9B66"
    >
      Enviar correo
    </Button>
  )
}