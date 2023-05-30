import { Link } from '../Link'

export default function Home () {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is an example for the home page</p>
      <Link to='/about'> to the About Page</Link>
    </>
  )
}
