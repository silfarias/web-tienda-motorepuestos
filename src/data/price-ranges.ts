export const PRICE_RANGES = [
  { id: 'todos', label: 'Todos los precios', min: 0, max: Infinity },
  { id: 'bajo', label: 'Hasta $15.000', min: 0, max: 15000 },
  { id: 'medio', label: '$15.001 – $40.000', min: 15001, max: 40000 },
  { id: 'alto', label: 'Más de $40.000', min: 40001, max: Infinity },
] as const

export type PriceRangeId = (typeof PRICE_RANGES)[number]['id']

export function matchesPriceRange(price: number, rangeId: PriceRangeId): boolean {
  if (rangeId === 'todos') return true
  const range = PRICE_RANGES.find((r) => r.id === rangeId)
  if (!range) return true
  return price >= range.min && price <= range.max
}
