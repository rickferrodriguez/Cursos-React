import { Link } from '../Link'

export default function Home () {
  return (
    <>
      <h1>Home</h1>
      <p>This is an example for the home page for the rick router</p>
      <Link to='/about'>Ir al about</Link>
    </>
  )
}
