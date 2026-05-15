import type { SvgIconComponent } from '@mui/icons-material'

type AppIconProps = {
  icon: SvgIconComponent
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const SIZE_MAP = { sm: 18, md: 22, lg: 28 } as const

export function AppIcon({ icon: Icon, className, size = 'md' }: AppIconProps) {
  return (
    <Icon
      className={className}
      sx={{ fontSize: SIZE_MAP[size], color: 'inherit', display: 'block' }}
      aria-hidden
    />
  )
}
