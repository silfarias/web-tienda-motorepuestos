import { STORE } from '../data/store'

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
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <p className="footer__copy">
          © {year} {STORE.name}. Landing de demostración.
        </p>
      </div>
    </footer>
  )
}
