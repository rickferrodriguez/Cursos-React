export default function Home ({ handleClick }) {
  return (
    <section>
      <h1>Home</h1>
      <p>Página de Inicio para interactuar con el React Router</p>
      <button onClick={handleClick}>Ir al About</button>
    </section>
  )
}
