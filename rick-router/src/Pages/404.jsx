import { Link } from '../Link'

export default function Page404 () {
  return (
    <>
      <div>
        <h3>404. This is not Fine</h3>
        <img
          src='https://midu.dev/images/this-is-fine-404.gif'
          alt="gift perro 'this is not fine' quemandose"
        />
      </div>
      <Link to='/'>Go to the Home Page</Link>
    </>
  )
}
