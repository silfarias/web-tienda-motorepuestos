import { STORE } from '../../config/store'
import { whatsappGeneralLink } from '../../lib/whatsapp'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappGeneralLink()}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contactar por WhatsApp al ${STORE.phone}`}
    >
      <WhatsAppIcon size={28} />
    </a>
  )
}
