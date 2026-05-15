export type CartLine = {
  productId: string
  quantity: number
}

export type OrderItem = {
  productId: string
  name: string
  price: number
  quantity: number
  image: string
}

export type Order = {
  id: string
  userId: string
  items: OrderItem[]
  total: number
  status: 'pendiente' | 'confirmado' | 'entregado'
  createdAt: string
}
