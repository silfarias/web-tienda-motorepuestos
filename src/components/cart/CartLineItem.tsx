import AddIcon from '@mui/icons-material/Add'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import RemoveIcon from '@mui/icons-material/Remove'
import type { Product } from '../../data/products'
import { useCart } from '../../contexts/CartContext'
import { formatPrice } from '../../lib/format'
import { AppIcon } from '../ui/AppIcon'

type CartLineItemProps = {
  product: Product & { quantity: number }
}

export function CartLineItem({ product }: CartLineItemProps) {
  const { updateQuantity, removeItem } = useCart()
  const lineTotal = product.price * product.quantity

  return (
    <li className="cart-line">
      <img src={product.image} alt={product.name} className="cart-line__img" />
      <div className="cart-line__body">
        <h3>{product.name}</h3>
        <p className="cart-line__unit">{formatPrice(product.price)} c/u</p>
        <div className="cart-line__actions">
          <div className="cart-line__qty">
            <button
              type="button"
              aria-label="Quitar uno"
              onClick={() => updateQuantity(product.id, product.quantity - 1)}
            >
              <AppIcon icon={RemoveIcon} size="sm" />
            </button>
            <span>{product.quantity}</span>
            <button
              type="button"
              aria-label="Agregar uno"
              onClick={() => updateQuantity(product.id, product.quantity + 1)}
            >
              <AppIcon icon={AddIcon} size="sm" />
            </button>
          </div>
          <button
            type="button"
            className="cart-line__remove"
            onClick={() => removeItem(product.id)}
          >
            <AppIcon icon={DeleteOutlineOutlinedIcon} size="sm" />
            Quitar
          </button>
        </div>
      </div>
      <p className="cart-line__total">{formatPrice(lineTotal)}</p>
    </li>
  )
}
