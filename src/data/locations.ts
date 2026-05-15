export type StoreLocation = {
  id: string
  name: string
  address: string
  phone: string
  whatsapp: string
  image: string
}

export const LOCATIONS: StoreLocation[] = [
  {
    id: 'local-1',
    name: 'Local 1 — El Porvenir',
    address: 'Barrio El Porvenir, Mz. X1, Casa 1',
    phone: '3705-454022',
    whatsapp: '543705454022',
    image: '/images/local-1.jpg',
  },
  {
    id: 'local-2',
    name: 'Local 2 — Gendarmería',
    address: 'Av. Gendarmería Nacional 1870',
    phone: '3705-008281',
    whatsapp: '543705008281',
    image: '/images/local-2.jpg',
  },
]

export function whatsappLocationLink(
  whatsapp: string,
  locationName: string,
): string {
  const text = encodeURIComponent(
    `Hola ${locationName}! Quisiera consultar por sus productos.`,
  )
  return `https://wa.me/${whatsapp}?text=${text}`
}
