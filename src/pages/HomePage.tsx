import {
  About,
  Categories,
  Contact,
  Hero,
  PromoStrip,
} from '../components/home'

export function HomePage() {
  return (
    <main>
      <Hero />
      <PromoStrip />
      <Categories />
      <About />
      <Contact />
    </main>
  )
}
