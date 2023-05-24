import { Link } from '../Link.jsx'

export default function Home () {
  return (
    <section>
      <h1>Home</h1>
      <p>Página de Inicio para interactuar con el React Router</p>
      <Link to='/about'>Ir al About</Link>
    </section>
  )
}
