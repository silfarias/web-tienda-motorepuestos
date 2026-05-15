export const PATHS = {
  home: '/',
  catalog: '/catalogo',
  login: '/iniciar-sesion',
  register: '/registro',
  cart: '/carrito',
  orders: '/mis-pedidos',
} as const

export const HOME_SECTIONS = {
  inicio: 'inicio',
  categorias: 'categorias',
  nosotros: 'nosotros',
  locales: 'locales',
  contacto: 'contacto',
} as const

export function homeSectionPath(section: keyof typeof HOME_SECTIONS): string {
  return `${PATHS.home}#${HOME_SECTIONS[section]}`
}
