const ITEMS = [
  {
    icon: '⚙️',
    title: 'Repuestos',
    desc: 'Motor, transmisión, frenos, filtros y más para todas las marcas.',
    href: '#catalogo',
  },
  {
    icon: '🪖',
    title: 'Cascos',
    desc: 'Integrales, abiertos y modulares con certificación y gran variedad.',
    href: '#catalogo',
  },
  {
    icon: '🔧',
    title: 'Accesorios',
    desc: 'Espejos, luces LED, guantes, fundas y equipamiento urbano.',
    href: '#catalogo',
  },
  {
    icon: '🛞',
    title: 'Neumáticos',
    desc: 'Cubiertas delanteras y traseras para calle, ciudad y ruta.',
    href: '#catalogo',
  },
  {
    icon: '🛢️',
    title: 'Lubricantes',
    desc: 'Aceites, grasas y fluidos para el cuidado de tu motor.',
    href: '#catalogo',
  },
  {
    icon: '✨',
    title: 'Personalización',
    desc: 'Detalles y accesorios para que tu moto refleje tu estilo.',
    href: '#catalogo',
  },
]

export function Categories() {
  return (
    <section id="categorias" className="section categories">
      <div className="section__head">
        <p className="section__eyebrow">¿Qué buscás?</p>
        <h2>Todo para tu moto en un solo lugar</h2>
        <p className="section__lead">
          Desde el repuesto que necesitás hoy hasta el casco de tus sueños. Stock
          permanente y asesoramiento sin vueltas.
        </p>
      </div>

      <div className="categories__grid">
        {ITEMS.map((item) => (
          <a key={item.title} href={item.href} className="category-card">
            <span className="category-card__icon" aria-hidden="true">
              {item.icon}
            </span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="category-card__link">Ver productos →</span>
          </a>
        ))}
      </div>
    </section>
  )
}
