import { navigate } from '../App'

export default function Home () {
  return (
    <>
      <h1>Home</h1>
      <p>This the home page for the midu router reset</p>
      <button onClick={() => navigate('/about')}>Ir al about</button>
    </>
  )
}
