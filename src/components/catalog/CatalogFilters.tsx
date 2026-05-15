import { CATEGORIES, type CategoryId } from '../../data/categories'
import { PRICE_RANGES, type PriceRangeId } from '../../data/price-ranges'
import { BRANDS, type BrandId } from '../../data/products'
import type { ProductFiltersState } from '../../hooks/useProductFilters'
import { FilterChip } from '../ui/FilterChip'
import { SelectField } from '../ui/SelectField'
import { Button } from '../ui/Button'

type CatalogFiltersProps = {
  filters: ProductFiltersState
  onChange: (patch: Partial<ProductFiltersState>) => void
  onReset: () => void
  activeCount: number
  resultCount: number
  totalCount: number
}

export function CatalogFilters({
  filters,
  onChange,
  onReset,
  activeCount,
  resultCount,
  totalCount,
}: CatalogFiltersProps) {
  return (
    <aside className="catalog-sidebar" aria-label="Filtros del catálogo">
      <div className="catalog-sidebar__head">
        <h2>Filtros</h2>
        {activeCount > 0 && (
          <button type="button" className="catalog-sidebar__clear" onClick={onReset}>
            Limpiar ({activeCount})
          </button>
        )}
      </div>

      <p className="catalog-sidebar__count">
        Mostrando <strong>{resultCount}</strong> de {totalCount} productos
      </p>

      <div className="catalog-sidebar__group">
        <h3>Categoría</h3>
        <div className="catalog-sidebar__chips" role="group" aria-label="Categoría">
          {CATEGORIES.map((cat) => (
            <FilterChip
              key={cat.id}
              label={cat.label}
              active={filters.category === cat.id}
              onClick={() => onChange({ category: cat.id as CategoryId })}
            />
          ))}
        </div>
      </div>

      <SelectField
        id="filter-brand"
        label="Marca"
        value={filters.brand}
        options={BRANDS.map((b) => ({ value: b.id, label: b.label }))}
        onChange={(value) => onChange({ brand: value as BrandId | 'todos' })}
      />

      <SelectField
        id="filter-price"
        label="Precio"
        value={filters.priceRange}
        options={PRICE_RANGES.map((r) => ({ value: r.id, label: r.label }))}
        onChange={(value) => onChange({ priceRange: value as PriceRangeId })}
      />

      <Button variant="outline" block onClick={onReset}>
        Restablecer filtros
      </Button>
    </aside>
  )
}
