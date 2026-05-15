import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartLineItem } from '../components/cart/CartLineItem'
import { SectionHead } from '../components/ui/SectionHead'
import { AppIcon } from '../components/ui/AppIcon'
import { Button } from '../components/ui/Button'
import { PATHS } from '../config/paths'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'
import { formatPrice } from '../lib/format'
import { whatsappGeneralLink } from '../lib/whatsapp'

export function CartPage() {
  const { items, subtotal, checkout, clearCart } = useCart()
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate(PATHS.login)
      return
    }
    setLoading(true)
    setMessage('')
    try {
      checkout()
      setMessage('¡Pedido registrado! Te contactaremos por WhatsApp para coordinar.')
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'No se pudo confirmar el pedido.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="cart-page section">
      <SectionHead
        align="left"
        eyebrow="Tu compra"
        title="Carrito"
        lead="Revisá los productos antes de confirmar. Los precios son orientativos."
        className="cart-page__head"
      />

      {items.length === 0 ? (
        <div className="cart-empty">
          <AppIcon icon={ShoppingBagOutlinedIcon} size="lg" />
          <h2>Tu carrito está vacío</h2>
          <p>Explorá el catálogo y agregá los repuestos que necesites.</p>
          <Button as="link" to={PATHS.catalog} variant="primary">
            Ir al catálogo
          </Button>
        </div>
      ) : (
        <div className="cart-layout">
          <ul className="cart-list">
            {items.map((item) => (
              <CartLineItem key={item.id} product={item} />
            ))}
          </ul>
          <aside className="cart-summary">
            <h2>Resumen</h2>
            <p className="cart-summary__row">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </p>
            <p className="cart-summary__note">
              Envío y forma de pago se coordinan por WhatsApp al confirmar.
            </p>
            {message && <p className="cart-summary__message">{message}</p>}
            <Button
              variant="primary"
              block
              disabled={loading}
              onClick={handleCheckout}
            >
              {loading ? 'Procesando...' : 'Confirmar pedido'}
            </Button>
            {!isAuthenticated && (
              <p className="cart-summary__hint">
                <Link to={PATHS.login}>Iniciá sesión</Link> para guardar tu pedido.
              </p>
            )}
            <Button
              as="a"
              variant="outline"
              block
              href={whatsappGeneralLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp
            </Button>
            <button type="button" className="cart-summary__clear" onClick={clearCart}>
              Vaciar carrito
            </button>
          </aside>
        </div>
      )}
    </main>
  )
}
