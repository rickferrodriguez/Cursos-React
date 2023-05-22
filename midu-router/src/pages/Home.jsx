export function Home ({ navigate }) {
  return (
    <section>
      <h2>Home</h2>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <button onClick={() => navigate('/about')}>Ir a sobre nosotros</button>
    </section>
  )
}
