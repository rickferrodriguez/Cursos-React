import { Link } from '../Link'

export default function Page404 () {
  return (
    <>
      <div>
        <h1>404. This is not Fine</h1>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt="Gif perro 'this is fine' quemándose" />
      </div>
      <Link to='/'>Ir a la Home</Link>
    </>
  )
}
