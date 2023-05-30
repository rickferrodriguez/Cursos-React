import { navigate } from '../App'

export default function Home () {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is an example for the home page</p>
      <button onClick={() => navigate('/about')}>Go to the About Page</button>
    </>
  )
}
