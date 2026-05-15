import { STORE } from '../../config/store'

const POINTS = [
  {
    title: 'Experiencia y cercanía',
    text: 'Un negocio familiar liderado por mujeres que entienden lo que necesitás en la calle.',
  },
  {
    title: 'Mayorista y minorista',
    text: 'Comprás una pieza o armás pedido para tu taller: siempre tenemos una opción para vos.',
  },
  {
    title: 'Marcas y compatibilidad',
    text: 'Trabajamos repuestos para Honda, Yamaha, Motomel, Gilera, Zanella y más.',
  },
]

export function About() {
  return (
    <section id="nosotros" className="section about">
      <div className="about__layout">
        <div className="about__content">
          <p className="section__eyebrow">Sobre nosotros</p>
          <h2>Más que un local de repuestos</h2>
          <p className="about__text">
            <strong>{STORE.name}</strong> nació con la idea de combinar la pasión
            por las motos con una atención cálida y profesional. Sabemos que tu
            moto es parte de tu día a día, y por eso te ayudamos a elegir lo
            correcto sin complicaciones.
          </p>
          <ul className="about__list">
            {POINTS.map((point) => (
              <li key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <aside className="about__aside" aria-label="Beneficios">
          <div className="about__highlight">
            <span className="about__highlight-icon" aria-hidden="true">
              💜
            </span>
            <h3>Compromiso Mia</h3>
            <p>
              Calidad, honestidad y ese toque personal que hace la diferencia
              cuando entrás al local o nos escribís por WhatsApp.
            </p>
          </div>
          <div className="about__quote">
            <blockquote>
              &ldquo;Mi meta es que cada cliente se vaya con la moto lista y la
              confianza de volver.&rdquo;
            </blockquote>
            <cite>— El equipo de {STORE.name}</cite>
          </div>
        </aside>
      </div>
    </section>
  )
}
