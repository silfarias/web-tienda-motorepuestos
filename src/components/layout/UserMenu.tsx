import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PATHS } from '../../config/paths'
import { useAuth } from '../../contexts/AuthContext'
import { useCart } from '../../contexts/CartContext'
import { cn } from '../../lib/cn'
import { AppIcon } from '../ui/AppIcon'
import { Button } from '../ui/Button'

type UserMenuProps = {
  onNavigate?: () => void
  mobile?: boolean
}

export function UserMenu({ onNavigate, mobile }: UserMenuProps) {
  const { user, isAuthenticated, logout } = useAuth()
  const { itemCount } = useCart()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const close = () => {
    setOpen(false)
    onNavigate?.()
  }

  const handleLogout = () => {
    logout()
    close()
    navigate(PATHS.home)
  }

  if (!isAuthenticated || !user) {
    if (mobile) {
      return (
        <Button as="link" to={PATHS.login} variant="outline" block onClick={close}>
          <AppIcon icon={LoginOutlinedIcon} size="sm" />
          Iniciar sesión
        </Button>
      )
    }
    return (
      <Link to={PATHS.login} className="header__auth-link" onClick={close}>
        <AppIcon icon={LoginOutlinedIcon} size="sm" />
        Iniciar sesión
      </Link>
    )
  }

  return (
    <div
      ref={ref}
      className={cn('user-menu', mobile && 'user-menu--mobile')}
    >
      <button
        type="button"
        className="user-menu__trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((o) => !o)}
      >
        <AppIcon icon={AccountCircleOutlinedIcon} size="md" />
        <span className="user-menu__label">Mi cuenta</span>
        <AppIcon icon={KeyboardArrowDownIcon} size="sm" />
        {itemCount > 0 && (
          <span className="user-menu__badge" aria-label={`${itemCount} en carrito`}>
            {itemCount}
          </span>
        )}
      </button>

      {open && (
        <div className="user-menu__dropdown" role="menu">
          <p className="user-menu__greeting">Hola, {user.name.split(' ')[0]}</p>
          <Link to={PATHS.orders} role="menuitem" onClick={close}>
            <AppIcon icon={ReceiptLongOutlinedIcon} size="sm" />
            Mis pedidos
          </Link>
          <Link to={PATHS.cart} role="menuitem" onClick={close}>
            <AppIcon icon={ShoppingCartOutlinedIcon} size="sm" />
            Carrito
            {itemCount > 0 && <span className="user-menu__pill">{itemCount}</span>}
          </Link>
          <button type="button" role="menuitem" onClick={handleLogout}>
            <AppIcon icon={LogoutOutlinedIcon} size="sm" />
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  )
}
