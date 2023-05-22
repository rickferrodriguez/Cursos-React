import { Link } from '../Link'

export default function Home () {
  return (
    <section>
      <h2>Home</h2>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <Link to='/about'>Ir a sobre nosotros</Link>
    </section>
  )
}
