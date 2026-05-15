import { useMemo, useState } from 'react'
import {
  CATEGORIES,
  PRODUCTS,
  type CategoryId,
  formatPrice,
  whatsappProductLink,
} from '../data/store'

export function Catalog() {
  const [active, setActive] = useState<CategoryId>('todos')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return PRODUCTS.filter((p) => {
      const matchCat = active === 'todos' || p.category === active
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [active, search])

  return (
    <section id="catalogo" className="section catalog">
      <div className="section__head">
        <p className="section__eyebrow">Catálogo de ejemplo</p>
        <h2>Productos destacados</h2>
        <p className="section__lead">
          Precios orientativos en pesos argentinos. Consultá stock y envíos por
          WhatsApp.
        </p>
      </div>

      <div className="catalog__toolbar">
        <label className="catalog__search">
          <span className="visually-hidden">Buscar producto</span>
          <input
            type="search"
            placeholder="Buscar repuesto, casco..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <div className="catalog__filters" role="tablist" aria-label="Categorías">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active === cat.id}
              className={`catalog__filter ${active === cat.id ? 'catalog__filter--active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="catalog__empty">
          No encontramos productos con ese criterio. Probá otra búsqueda o
          escribinos por WhatsApp.
        </p>
      ) : (
        <ul className="catalog__grid">
          {filtered.map((product) => (
            <li key={product.id}>
              <article className="product-card">
                <div className="product-card__media">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  {product.badge && (
                    <span className="product-card__badge">{product.badge}</span>
                  )}
                </div>
                <div className="product-card__body">
                  <span className="product-card__category">
                    {
                      CATEGORIES.find((c) => c.id === product.category)
                        ?.label
                    }
                  </span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-card__footer">
                    <span className="product-card__price">
                      {formatPrice(product.price)}
                    </span>
                    <a
                      href={whatsappProductLink(product.name)}
                      className="btn btn--primary btn--sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
