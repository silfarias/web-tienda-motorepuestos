export const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'repuestos', label: 'Repuestos' },
  { id: 'cascos', label: 'Cascos' },
  { id: 'accesorios', label: 'Accesorios' },
  { id: 'lubricantes', label: 'Lubricantes' },
  { id: 'neumaticos', label: 'Neumáticos' },
] as const

export type CategoryId = (typeof CATEGORIES)[number]['id']

export type ProductCategory = Exclude<CategoryId, 'todos'>

export function getCategoryLabel(id: ProductCategory | CategoryId): string {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id
}
