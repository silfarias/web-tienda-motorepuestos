import { createBrowserRouter } from 'react-router-dom'
import { PATHS } from '../config/paths'
import { AppLayout } from '../layouts/AppLayout'
import { CartPage } from '../pages/CartPage'
import { CatalogPage } from '../pages/CatalogPage'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { OrdersPage } from '../pages/OrdersPage'
import { RegisterPage } from '../pages/RegisterPage'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: PATHS.home, element: <HomePage /> },
      { path: PATHS.catalog, element: <CatalogPage /> },
      { path: PATHS.login, element: <LoginPage /> },
      { path: PATHS.register, element: <RegisterPage /> },
      { path: PATHS.cart, element: <CartPage /> },
      { path: PATHS.orders, element: <OrdersPage /> },
    ],
  },
])
