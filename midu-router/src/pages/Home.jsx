import { Link } from '../Link'

export function Home () {
  return (
    <section>
      <h1>Home</h1>
      <p>This is the home page for the React Router</p>
      <Link to='/about'>Ir al about</Link>
    </section>
  )
}
