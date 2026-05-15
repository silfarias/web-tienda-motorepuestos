import { STORE } from '../config/store'

export function whatsappProductLink(productName: string): string {
  const text = encodeURIComponent(
    `Hola ${STORE.name}! Me interesa consultar por: ${productName}`,
  )
  return `https://wa.me/${STORE.whatsapp}?text=${text}`
}

export function whatsappGeneralLink(): string {
  const text = encodeURIComponent(
    'Hola! Quisiera hacer una consulta sobre sus productos.',
  )
  return `https://wa.me/${STORE.whatsapp}?text=${text}`
}
