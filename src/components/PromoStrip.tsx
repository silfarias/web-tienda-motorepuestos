const ITEMS = [
  { icon: '🚚', text: 'Envíos a todo el país' },
  { icon: '💳', text: 'Efectivo y transferencia' },
  { icon: '🏪', text: 'Retiro en local' },
  { icon: '📦', text: 'Lista mayorista' },
]

export function PromoStrip() {
  return (
    <div className="promo-strip" aria-label="Beneficios del negocio">
      <ul>
        {ITEMS.map((item) => (
          <li key={item.text}>
            <span aria-hidden="true">{item.icon}</span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
