import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { getBrandLabel, getCategoryLabel, type Product } from '../../data'
import { useCart } from '../../contexts/CartContext'
import { formatPrice } from '../../lib/format'
import { whatsappProductLink } from '../../lib/whatsapp'
import { AppIcon } from '../ui/AppIcon'
import { Button } from '../ui/Button'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <article className="product-card">
      <div className="product-card__media">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
      </div>
      <div className="product-card__body">
        <div className="product-card__meta">
          <span className="product-card__category">
            {getCategoryLabel(product.category)}
          </span>
          <span className="product-card__brand">{getBrandLabel(product.brand)}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">{formatPrice(product.price)}</span>
        </div>
        <div className="product-card__buttons">
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={() => addItem(product.id)}
          >
            <AppIcon icon={ShoppingCartOutlinedIcon} size="sm" />
            Agregar
          </Button>
          <Button
            as="a"
            variant="outline"
            size="sm"
            href={whatsappProductLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppIcon icon={WhatsAppIcon} size="sm" />
            Consultar
          </Button>
        </div>
      </div>
    </article>
  )
}
