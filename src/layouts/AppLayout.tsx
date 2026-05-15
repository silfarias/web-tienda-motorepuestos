import { Outlet } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { ScrollToTop } from '../components/layout/ScrollToTop'
import { WhatsAppFloat } from '../components/layout/WhatsAppFloat'

export function AppLayout() {
  return (
    <div className="app-layout">
      <ScrollToTop />
      <Header />
      <div className="app-layout__main">
        <Outlet />
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
