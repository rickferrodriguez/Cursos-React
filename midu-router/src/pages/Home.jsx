import { navigate } from '../App'

export function Home () {
  return (
    <section>
      <h1>Home</h1>
      <p>This is the home page for the React Router</p>
      <button onClick={() => navigate('/about')}>Ir al About</button>
    </section>
  )
}
