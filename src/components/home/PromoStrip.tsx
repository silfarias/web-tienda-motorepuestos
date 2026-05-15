import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import type { SvgIconComponent } from '@mui/icons-material'
import { AppIcon } from '../ui/AppIcon'

const ITEMS: { icon: SvgIconComponent; text: string }[] = [
  { icon: LocalShippingOutlinedIcon, text: 'Envíos a todo el país' },
  { icon: PaymentsOutlinedIcon, text: 'Efectivo y transferencia' },
  { icon: StorefrontOutlinedIcon, text: 'Retiro en local' },
  { icon: Inventory2OutlinedIcon, text: 'Lista mayorista' },
]

export function PromoStrip() {
  return (
    <div className="promo-strip" aria-label="Beneficios del negocio">
      <ul>
        {ITEMS.map((item) => (
          <li key={item.text}>
            <AppIcon icon={item.icon} size="sm" />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
