import { About } from './components/About'
import { Catalog } from './components/Catalog'
import { Categories } from './components/Categories'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PromoStrip } from './components/PromoStrip'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PromoStrip />
        <Categories />
        <Catalog />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
