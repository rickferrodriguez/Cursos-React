import { Link } from '../Link'

export default function Page404 () {
  return (
    <>
      <div>
        <h1>This is not fine, 404</h1>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt="perro 'this is fine' quemandose, error 404" />
      </div>
      <Link to='/'>Ir a la Home</Link>
    </>
  )
}
