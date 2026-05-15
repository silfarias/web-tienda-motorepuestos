import { STORE } from '../../config/store'
import { PATHS } from '../../config/paths'
import { whatsappGeneralLink } from '../../lib/whatsapp'
import { Button } from '../ui/Button'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

export function Contact() {
  return (
    <section id="contacto" className="section contact">
      <div className="contact__card">
        <div className="contact__text">
          <p className="section__eyebrow">Contacto</p>
          <h2>¿Listo para tu próximo repuesto?</h2>
          <p>
            Escribinos por WhatsApp, pasá por el local o pedinos tu lista
            mayorista. Respondemos rápido y con buena onda.
          </p>
          <ul className="contact__details">
            <li>
              <strong>WhatsApp</strong>
              <a
                href={whatsappGeneralLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {STORE.phone}
              </a>
            </li>
            <li>
              <strong>Ubicación</strong>
              <span>{STORE.location}</span>
            </li>
            <li>
              <strong>Horario</strong>
              <span>Lun a Sáb · 8:00 a 13:00 y 16:00 a 20:00</span>
            </li>
          </ul>
        </div>
        <div className="contact__actions">
          <Button
            as="a"
            variant="whatsapp"
            size="lg"
            href={whatsappGeneralLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Chatear ahora
          </Button>
          <Button as="link" to={PATHS.catalog} variant="ghost" size="lg">
            Ver catálogo
          </Button>
        </div>
      </div>
    </section>
  )
}
