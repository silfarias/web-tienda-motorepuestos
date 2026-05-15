import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined'
import OilBarrelOutlinedIcon from '@mui/icons-material/OilBarrelOutlined'
import SportsMotorsportsOutlinedIcon from '@mui/icons-material/SportsMotorsportsOutlined'
import TireRepairOutlinedIcon from '@mui/icons-material/TireRepairOutlined'
import type { SvgIconComponent } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import type { ProductCategory } from '../../data/categories'
import { PATHS } from '../../config/paths'
import { AppIcon } from '../ui/AppIcon'
import { SectionHead } from '../ui/SectionHead'

const ITEMS: {
  icon: SvgIconComponent
  title: string
  desc: string
  category: ProductCategory
}[] = [
  {
    icon: BuildOutlinedIcon,
    title: 'Repuestos',
    desc: 'Motor, transmisión, frenos, filtros y más para todas las marcas.',
    category: 'repuestos',
  },
  {
    icon: SportsMotorsportsOutlinedIcon,
    title: 'Cascos',
    desc: 'Integrales, abiertos y modulares con certificación y gran variedad.',
    category: 'cascos',
  },
  {
    icon: HandymanOutlinedIcon,
    title: 'Accesorios',
    desc: 'Espejos, luces LED, guantes, fundas y equipamiento urbano.',
    category: 'accesorios',
  },
  {
    icon: TireRepairOutlinedIcon,
    title: 'Neumáticos',
    desc: 'Cubiertas delanteras y traseras para calle, ciudad y ruta.',
    category: 'neumaticos',
  },
  {
    icon: OilBarrelOutlinedIcon,
    title: 'Lubricantes',
    desc: 'Aceites, grasas y fluidos para el cuidado de tu motor.',
    category: 'lubricantes',
  },
  {
    icon: AutoAwesomeOutlinedIcon,
    title: 'Personalización',
    desc: 'Detalles y accesorios para que tu moto refleje tu estilo.',
    category: 'accesorios',
  },
]

export function Categories() {
  return (
    <section id="categorias" className="section categories">
      <SectionHead
        eyebrow="¿Qué buscás?"
        title="Todo para tu moto en un solo lugar"
        lead="Desde el repuesto que necesitás hoy hasta el casco de tus sueños. Stock permanente y asesoramiento sin vueltas."
      />

      <div className="categories__grid">
        {ITEMS.map((item) => (
          <Link
            key={item.title}
            to={`${PATHS.catalog}?categoria=${item.category}`}
            className="category-card"
          >
            <span className="category-card__icon" aria-hidden="true">
              <AppIcon icon={item.icon} size="lg" />
            </span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="category-card__link">Ver productos →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
