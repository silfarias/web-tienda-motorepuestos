import type { ProductCategory } from './categories'

export type BrandId =
  | 'honda'
  | 'yamaha'
  | 'ngk'
  | 'mia'
  | 'universal'
  | 'motul'
  | 'pirelli'
  | 'osaka'

export type Product = {
  id: string
  name: string
  category: ProductCategory
  brand: BrandId
  price: number
  description: string
  badge?: string
  image: string
}

export const BRANDS: { id: BrandId | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todas las marcas' },
  { id: 'honda', label: 'Honda' },
  { id: 'yamaha', label: 'Yamaha' },
  { id: 'ngk', label: 'NGK' },
  { id: 'mia', label: 'Mia' },
  { id: 'universal', label: 'Universal' },
  { id: 'motul', label: 'Motul' },
  { id: 'pirelli', label: 'Pirelli' },
  { id: 'osaka', label: 'Osaka' },
]

export function getBrandLabel(id: BrandId | 'todos'): string {
  return BRANDS.find((b) => b.id === id)?.label ?? id
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kit de transmisión 110cc',
    category: 'repuestos',
    brand: 'universal',
    price: 28500,
    description: 'Cadena, corona y piñón. Calidad reforzada para uso diario.',
    badge: 'Más vendido',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
  },
  {
    id: '2',
    name: 'Casco integral Mia Pro',
    category: 'cascos',
    brand: 'mia',
    price: 89000,
    description: 'Visera antirrayas, interior desmontable y ventilación superior.',
    badge: 'Nuevo',
    image:
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80',
  },
  {
    id: '3',
    name: 'Pastillas de freno delanteras',
    category: 'repuestos',
    brand: 'honda',
    price: 12400,
    description: 'Compatible con Honda Wave, Yamaha Crypton y similares.',
    image:
      'https://images.unsplash.com/photo-1622185131049-475d4a0c1c0a?w=600&q=80',
  },
  {
    id: '4',
    name: 'Aceite 20W-50 mineral 1L',
    category: 'lubricantes',
    brand: 'motul',
    price: 6800,
    description: 'Protección para motores 4 tiempos. Presentación litro.',
    image:
      'https://images.unsplash.com/photo-1609630875171-bb132b03d3b0?w=600&q=80',
  },
  {
    id: '5',
    name: 'Neumático trasero 90/90-18',
    category: 'neumaticos',
    brand: 'pirelli',
    price: 45200,
    description: 'Doble compuesto, buen agarre en calle y ripio.',
    image:
      'https://images.unsplash.com/photo-1619642751034-765dfdf7d58f?w=600&q=80',
  },
  {
    id: '6',
    name: 'Espejos retrovisores universales',
    category: 'accesorios',
    brand: 'universal',
    price: 9800,
    description: 'Par cromado, rosca 10mm. Fácil instalación.',
    image:
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80',
  },
  {
    id: '7',
    name: 'Casco abierto urbano',
    category: 'cascos',
    brand: 'osaka',
    price: 52000,
    description: 'Liviano, ideal para ciudad. Certificación IRAM.',
    image:
      'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80',
  },
  {
    id: '8',
    name: 'Bujía NGK equivalente',
    category: 'repuestos',
    brand: 'ngk',
    price: 4500,
    description: 'Encendido confiable para motos 125–150cc.',
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80',
  },
  {
    id: '9',
    name: 'Guantes touring verano',
    category: 'accesorios',
    brand: 'mia',
    price: 15600,
    description: 'Protección en nudillos, palma reforzada y tacto táctil.',
    badge: 'Oferta',
    image:
      'https://images.unsplash.com/photo-1558980664-769d70746a12?w=600&q=80',
  },
  {
    id: '10',
    name: 'Filtro de aire espuma',
    category: 'repuestos',
    brand: 'yamaha',
    price: 7200,
    description: 'Alto flujo para motos 110 y 125. Lavable y reutilizable.',
    image:
      'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&q=80',
  },
  {
    id: '11',
    name: 'Kit luces LED H4',
    category: 'accesorios',
    brand: 'universal',
    price: 18900,
    description: 'Mayor visibilidad nocturna. Bajo consumo.',
    image:
      'https://images.unsplash.com/photo-1517649763962-0c62306601b7?w=600&q=80',
  },
  {
    id: '12',
    name: 'Neumático delantero 2.75-17',
    category: 'neumaticos',
    brand: 'pirelli',
    price: 39800,
    description: 'Para motos 110–125. Excelente durabilidad.',
    image:
      'https://images.unsplash.com/photo-1619400282215-62a5b7bac35e?w=600&q=80',
  },
]
