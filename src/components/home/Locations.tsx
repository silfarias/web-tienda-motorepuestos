import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { LOCATIONS, whatsappLocationLink } from '../../data/locations'
import { AppIcon } from '../ui/AppIcon'
import { Button } from '../ui/Button'
import { SectionHead } from '../ui/SectionHead'

export function Locations() {
  return (
    <section id="locales" className="section locations">
      <SectionHead
        eyebrow="Cerca tuyo"
        title="Conocé nuestros locales"
        lead="Dos puntos de atención en Formosa para que compres con confianza, veas el stock y recibas el mejor asesoramiento."
      />

      <div className="locations__grid">
        {LOCATIONS.map((local) => (
          <article key={local.id} className="location-card">
            <div className="location-card__media">
              <img src={local.image} alt={local.name} loading="lazy" />
            </div>
            <div className="location-card__body">
              <h3>{local.name}</h3>
              <ul className="location-card__details">
                <li>
                  <AppIcon icon={LocationOnOutlinedIcon} size="sm" />
                  <span>{local.address}</span>
                </li>
                <li>
                  <AppIcon icon={PhoneOutlinedIcon} size="sm" />
                  <a href={`tel:+${local.whatsapp}`}>{local.phone}</a>
                </li>
              </ul>
              <Button
                as="a"
                variant="outline"
                size="sm"
                href={whatsappLocationLink(local.whatsapp, local.name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppIcon icon={WhatsAppIcon} size="sm" />
                Escribir por WhatsApp
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
