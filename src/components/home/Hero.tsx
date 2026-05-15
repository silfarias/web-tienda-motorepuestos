import { PATHS } from '../../config/paths'
import { STORE } from '../../config/store'
import { whatsappGeneralLink } from '../../lib/whatsapp'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__smoke hero__smoke--1" />
        <div className="hero__smoke hero__smoke--2" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Tu moto, nuestra pasión</p>
        <h1>
          Repuestos, cascos y accesorios con{' '}
          <span className="text-gradient">estilo y confianza</span>
        </h1>
        <p className="hero__lead">
          En <strong>{STORE.name}</strong> encontrás todo para tu moto: desde
          piezas de motor hasta equipamiento de seguridad. Atención cercana,
          precios mayoristas y minoristas.
        </p>
        <div className="hero__actions">
          <Button as="link" to={PATHS.catalog} variant="primary" size="lg">
            Explorar catálogo
          </Button>
          <Button
            as="a"
            variant="outline"
            size="lg"
            href={whatsappGeneralLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por WhatsApp
          </Button>
        </div>
        <ul className="hero__stats">
          <li>
            <strong>+500</strong>
            <span>productos</span>
          </li>
          <li>
            <strong>Mayorista</strong>
            <span>y minorista</span>
          </li>
          <li>
            <strong>Envíos</strong>
            <span>a todo el país</span>
          </li>
        </ul>
      </div>

      <div className="hero__visual">
        <div className="hero__card hero__card--main">
          <img
            src="/images/banner-mia-moto.png"
            alt={`${STORE.name} - repuestos y accesorios para motos`}
            className="hero__banner"
            onError={(e) => {
              const img = e.currentTarget
              img.style.display = 'none'
              img.parentElement?.classList.add('hero__card--fallback')
            }}
          />
          <div className="hero__card-fallback" aria-hidden="true">
            <span className="hero__bike-icon">🏍️</span>
          </div>
        </div>
        <div className="hero__card hero__card--float">
          <span className="hero__float-icon">✨</span>
          <p>
            <strong>Atención personalizada</strong>
            <small>Te asesoramos con cariño</small>
          </p>
        </div>
      </div>
    </section>
  )
}
