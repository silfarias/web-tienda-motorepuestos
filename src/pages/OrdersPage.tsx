import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined'
import { SectionHead } from '../components/ui/SectionHead'
import { AppIcon } from '../components/ui/AppIcon'
import { Button } from '../components/ui/Button'
import { PATHS } from '../config/paths'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'
import { formatPrice } from '../lib/format'

const STATUS_LABEL = {
  pendiente: 'Pendiente',
  confirmado: 'Confirmado',
  entregado: 'Entregado',
} as const

export function OrdersPage() {
  const { isAuthenticated } = useAuth()
  const { orders } = useCart()

  if (!isAuthenticated) {
    return (
      <main className="orders-page section">
        <SectionHead
          align="left"
          title="Mis pedidos"
          lead="Iniciá sesión para ver el historial de tus pedidos."
        />
        <Button as="link" to={PATHS.login} variant="primary">
          Iniciar sesión
        </Button>
      </main>
    )
  }

  return (
    <main className="orders-page section">
      <SectionHead
        align="left"
        eyebrow="Tu historial"
        title="Mis pedidos"
        lead="Pedidos de demostración guardados en tu navegador."
        className="orders-page__head"
      />

      {orders.length === 0 ? (
        <div className="cart-empty">
          <AppIcon icon={ReceiptLongOutlinedIcon} size="lg" />
          <h2>Aún no tenés pedidos</h2>
          <p>Cuando confirmes tu carrito, aparecerán acá.</p>
          <Button as="link" to={PATHS.catalog} variant="primary">
            Ver catálogo
          </Button>
        </div>
      ) : (
        <ul className="orders-list">
          {orders.map((order) => (
            <li key={order.id} className="order-card">
              <div className="order-card__head">
                <div>
                  <p className="order-card__id">
                    Pedido #{order.id.slice(0, 8).toUpperCase()}
                  </p>
                  <p className="order-card__date">
                    {new Date(order.createdAt).toLocaleDateString('es-AR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <span className={`order-card__status order-card__status--${order.status}`}>
                  {STATUS_LABEL[order.status]}
                </span>
              </div>
              <ul className="order-card__items">
                {order.items.map((item) => (
                  <li key={`${order.id}-${item.productId}`}>
                    <img src={item.image} alt="" />
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <strong>{formatPrice(item.price * item.quantity)}</strong>
                  </li>
                ))}
              </ul>
              <p className="order-card__total">
                Total: <strong>{formatPrice(order.total)}</strong>
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
