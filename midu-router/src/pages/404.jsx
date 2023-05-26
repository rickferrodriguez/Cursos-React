import { Link } from '../Link'

export default function Page404 () {
  return (
    <>
      <div>
        <h3>This is not Fine 404</h3>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt='Imagen perro this is fine quemandose' />
      </div>
      <Link to='/'>Volver a la Home</Link>
    </>
  )
}
