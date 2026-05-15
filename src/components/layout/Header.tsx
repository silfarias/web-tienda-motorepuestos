import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { homeSectionPath, PATHS } from '../../config/paths'
import { useScrollHeader } from '../../hooks/useScrollHeader'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { BrandLogo } from './BrandLogo'
import { UserMenu } from './UserMenu'

const NAV_HOME = [
  { to: homeSectionPath('inicio'), label: 'Inicio', end: true },
  { to: homeSectionPath('categorias'), label: 'Categorías' },
  { to: homeSectionPath('nosotros'), label: 'Nosotros' },
  { to: homeSectionPath('locales'), label: 'Locales' },
  { to: homeSectionPath('contacto'), label: 'Contacto' },
] as const

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrollHeader()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(isActive && 'header__link--active')

  return (
    <header className={cn('header', scrolled && 'header--scrolled')}>
      <div className="header__inner">
        <Link to={PATHS.home} className="header__brand" onClick={closeMenu}>
          <BrandLogo />
        </Link>

        <nav className="header__nav" aria-label="Principal">
          <ul>
            {NAV_HOME.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={navLinkClass}
                  onClick={closeMenu}
                  end={'end' in item ? item.end : false}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <UserMenu onNavigate={closeMenu} />
          <Button
            as="link"
            to={PATHS.catalog}
            variant="primary"
            className="header__cta"
          >
            Ver catálogo
          </Button>
        </div>

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
        className={cn(
          'header__overlay',
          menuOpen && 'header__overlay--open',
        )}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Menú móvil">
          <ul>
            {NAV_HOME.map((item) => (
              <li key={item.label}>
                <NavLink to={item.to} onClick={closeMenu}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <UserMenu mobile onNavigate={closeMenu} />
          <Button
            as="link"
            to={PATHS.catalog}
            variant="primary"
            block
            onClick={closeMenu}
          >
            Ver catálogo
          </Button>
        </nav>
      </div>
    </header>
  )
}
