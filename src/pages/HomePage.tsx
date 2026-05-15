import {
  About,
  Categories,
  Contact,
  Hero,
  Locations,
  PromoStrip,
} from '../components/home'

export function HomePage() {
  return (
    <main>
      <Hero />
      <PromoStrip />
      <Categories />
      <About />
      <Locations />
      <Contact />
    </main>
  )
}
