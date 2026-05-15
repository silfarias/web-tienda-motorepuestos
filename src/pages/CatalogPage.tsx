import { CatalogFilters } from '../components/catalog/CatalogFilters'
import { CatalogSearch } from '../components/catalog/CatalogSearch'
import { ProductGrid } from '../components/catalog/ProductGrid'
import { SectionHead } from '../components/ui/SectionHead'
import { useProductFilters } from '../hooks/useProductFilters'

export function CatalogPage() {
  const {
    filters,
    setFilters,
    resetFilters,
    filteredProducts,
    activeFilterCount,
    totalProducts,
  } = useProductFilters()

  return (
    <main className="catalog-page">
      <div className="catalog-page__hero">
        <SectionHead
          align="left"
          eyebrow="Catálogo"
          title="Todos nuestros productos"
          lead="Buscá por nombre, filtrá por categoría, marca o rango de precio. Los valores son orientativos; consultá stock por WhatsApp."
          className="catalog-page__head"
        />
        <CatalogSearch
          value={filters.search}
          onChange={(search) => setFilters({ search })}
        />
      </div>

      <div className="catalog-page__layout section">
        <CatalogFilters
          filters={filters}
          onChange={setFilters}
          onReset={resetFilters}
          activeCount={activeFilterCount}
          resultCount={filteredProducts.length}
          totalCount={totalProducts}
        />
        <div className="catalog-page__results">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </main>
  )
}
