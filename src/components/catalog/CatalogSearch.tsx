type CatalogSearchProps = {
  value: string
  onChange: (value: string) => void
}

export function CatalogSearch({ value, onChange }: CatalogSearchProps) {
  return (
    <label className="catalog__search">
      <span className="visually-hidden">Buscar producto</span>
      <input
        type="search"
        placeholder="Buscar repuesto, casco, marca..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}
