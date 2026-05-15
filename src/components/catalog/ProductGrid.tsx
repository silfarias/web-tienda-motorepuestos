import type { Product } from '../../data'
import { ProductCard } from './ProductCard'

type ProductGridProps = {
  products: Product[]
  emptyMessage?: string
}

export function ProductGrid({
  products,
  emptyMessage = 'No encontramos productos con ese criterio. Probá otra búsqueda o escribinos por WhatsApp.',
}: ProductGridProps) {
  if (products.length === 0) {
    return <p className="catalog__empty">{emptyMessage}</p>
  }

  return (
    <ul className="catalog__grid">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}
