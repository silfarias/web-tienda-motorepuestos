import { Link } from 'react-router-dom'
import { STORE } from '../../config/store'
import { homeSectionPath, PATHS } from '../../config/paths'
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="header__logo">MM</span>
          <p>
            <strong>{STORE.name}</strong>
            <br />
            {STORE.tagline}
          </p>
        </div>
        <nav className="footer__nav" aria-label="Pie de página">
          <Link to={PATHS.home}>Inicio</Link>
          <Link to={PATHS.catalog}>Catálogo</Link>
          <Link to={PATHS.cart}>Carrito</Link>
          <Link to={PATHS.orders}>Mis pedidos</Link>
          <Link to={homeSectionPath('nosotros')}>Nosotros</Link>
          <Link to={homeSectionPath('locales')}>Locales</Link>
          <Link to={homeSectionPath('contacto')}>Contacto</Link>
        </nav>
        <p className="footer__copy">
          © {year} {STORE.name}. Landing de demostración.
        </p>
      </div>
    </footer>
  )
}
