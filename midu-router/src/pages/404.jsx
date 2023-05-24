import { Link } from '../Link'

function Page404 () {
  return (
    <section style={{ display: 'grid', gap: '1rem' }}>
      <h1>This is not Fine 404</h1>
      <img src='https://midu.dev/images/this-is-fine-404.gif' alt='Gif perro this is fine' />
      <Link to='/'>Go to Home</Link>
    </section>
  )
}

export default Page404
