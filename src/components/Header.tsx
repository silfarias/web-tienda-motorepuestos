import { useEffect, useState } from 'react'
import { STORE } from '../data/store'

const NAV = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#categorias', label: 'Categorías' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#inicio" className="header__brand" onClick={closeMenu}>
          <span className="header__logo" aria-hidden="true">
            MM
          </span>
          <span className="header__name">
            <strong>{STORE.name}</strong>
            <small>{STORE.tagline}</small>
          </span>
        </a>

        <nav className="header__nav" aria-label="Principal">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#catalogo" className="btn btn--primary header__cta">
          Ver catálogo
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`header__overlay ${menuOpen ? 'header__overlay--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Menú móvil">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#catalogo"
            className="btn btn--primary btn--block"
            onClick={closeMenu}
          >
            Ver catálogo
          </a>
        </nav>
      </div>
    </header>
  )
}
