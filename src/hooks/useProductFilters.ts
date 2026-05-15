import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { CategoryId } from '../data/categories'
import { CATEGORIES } from '../data/categories'
import type { PriceRangeId } from '../data/price-ranges'
import { PRICE_RANGES, matchesPriceRange } from '../data/price-ranges'
import type { BrandId, Product } from '../data/products'
import { PRODUCTS } from '../data/products'

export type ProductFiltersState = {
  search: string
  category: CategoryId
  brand: BrandId | 'todos'
  priceRange: PriceRangeId
}

function parseCategory(value: string | null): CategoryId {
  if (value && CATEGORIES.some((c) => c.id === value)) {
    return value as CategoryId
  }
  return 'todos'
}

function parseBrand(value: string | null): BrandId | 'todos' {
  if (!value || value === 'todos') return 'todos'
  return value as BrandId
}

function parsePriceRange(value: string | null): PriceRangeId {
  if (value && PRICE_RANGES.some((r) => r.id === value)) {
    return value as PriceRangeId
  }
  return 'todos'
}

export function useProductFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const filters: ProductFiltersState = useMemo(
    () => ({
      search: searchParams.get('q') ?? '',
      category: parseCategory(searchParams.get('categoria')),
      brand: parseBrand(searchParams.get('marca')),
      priceRange: parsePriceRange(searchParams.get('precio')),
    }),
    [searchParams],
  )

  const setFilters = (patch: Partial<ProductFiltersState>) => {
    const next = { ...filters, ...patch }
    const params = new URLSearchParams()

    if (next.search.trim()) params.set('q', next.search.trim())
    if (next.category !== 'todos') params.set('categoria', next.category)
    if (next.brand !== 'todos') params.set('marca', next.brand)
    if (next.priceRange !== 'todos') params.set('precio', next.priceRange)

    setSearchParams(params, { replace: true })
  }

  const resetFilters = () => setSearchParams({}, { replace: true })

  const filteredProducts = useMemo(() => {
    const q = filters.search.trim().toLowerCase()

    return PRODUCTS.filter((product) => {
      const matchCategory =
        filters.category === 'todos' || product.category === filters.category
      const matchBrand =
        filters.brand === 'todos' || product.brand === filters.brand
      const matchPrice = matchesPriceRange(product.price, filters.priceRange)
      const matchSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q)

      return matchCategory && matchBrand && matchPrice && matchSearch
    })
  }, [filters])

  const activeFilterCount = useMemo(() => {
    let count = 0
    if (filters.category !== 'todos') count++
    if (filters.brand !== 'todos') count++
    if (filters.priceRange !== 'todos') count++
    if (filters.search.trim()) count++
    return count
  }, [filters])

  return {
    filters,
    setFilters,
    resetFilters,
    filteredProducts,
    activeFilterCount,
    totalProducts: PRODUCTS.length,
  }
}

export function filterProducts(
  products: Product[],
  filters: ProductFiltersState,
): Product[] {
  const q = filters.search.trim().toLowerCase()

  return products.filter((product) => {
    const matchCategory =
      filters.category === 'todos' || product.category === filters.category
    const matchBrand = filters.brand === 'todos' || product.brand === filters.brand
    const matchPrice = matchesPriceRange(product.price, filters.priceRange)
    const matchSearch =
      !q ||
      product.name.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q)

    return matchCategory && matchBrand && matchPrice && matchSearch
  })
}
