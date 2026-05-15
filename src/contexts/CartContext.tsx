import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { PRODUCTS, type Product } from '../data/products'
import { readStorage, writeStorage } from '../lib/storage'
import type { CartLine, Order, OrderItem } from '../types/cart'
import { useAuth } from './AuthContext'

const CART_KEY = 'mia-cart'

function ordersKey(userId: string) {
  return `mia-orders-${userId}`
}

type CartProduct = Product & { quantity: number }

type CartContextValue = {
  items: CartProduct[]
  itemCount: number
  subtotal: number
  addItem: (productId: string, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  checkout: () => Order
  orders: Order[]
}

const CartContext = createContext<CartContextValue | null>(null)

function loadLines(): CartLine[] {
  return readStorage<CartLine[]>(CART_KEY, [])
}

function saveLines(lines: CartLine[]) {
  writeStorage(CART_KEY, lines)
}

function linesToProducts(lines: CartLine[]): CartProduct[] {
  return lines
    .map((line) => {
      const product = PRODUCTS.find((p) => p.id === line.productId)
      if (!product) return null
      return { ...product, quantity: line.quantity }
    })
    .filter((p): p is CartProduct => p !== null)
}

export function CartProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [lines, setLines] = useState<CartLine[]>(() => loadLines())
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    saveLines(lines)
  }, [lines])

  useEffect(() => {
    if (user) {
      setOrders(readStorage<Order[]>(ordersKey(user.id), []))
    } else {
      setOrders([])
    }
  }, [user])

  const items = useMemo(() => linesToProducts(lines), [lines])

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  )

  const addItem = useCallback((productId: string, quantity = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.productId === productId)
      if (existing) {
        return prev.map((l) =>
          l.productId === productId
            ? { ...l, quantity: l.quantity + quantity }
            : l,
        )
      }
      return [...prev, { productId, quantity }]
    })
  }, [])

  const removeItem = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId))
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      setLines((prev) => prev.filter((l) => l.productId !== productId))
      return
    }
    setLines((prev) =>
      prev.map((l) => (l.productId === productId ? { ...l, quantity } : l)),
    )
  }, [])

  const clearCart = useCallback(() => setLines([]), [])

  const checkout = useCallback(() => {
    if (!user) throw new Error('Debes iniciar sesión para confirmar el pedido.')
    if (items.length === 0) throw new Error('Tu carrito está vacío.')

    const orderItems: OrderItem[] = items.map((item) => ({
      productId: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
    }))

    const order: Order = {
      id: crypto.randomUUID(),
      userId: user.id,
      items: orderItems,
      total: subtotal,
      status: 'pendiente',
      createdAt: new Date().toISOString(),
    }

    const nextOrders = [order, ...orders]
    writeStorage(ordersKey(user.id), nextOrders)
    setOrders(nextOrders)
    setLines([])
    return order
  }, [user, items, subtotal, orders])

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      checkout,
      orders,
    }),
    [
      items,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      checkout,
      orders,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')
  return ctx
}
