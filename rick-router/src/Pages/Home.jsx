import { navigation } from '../App'

export default function Home () {
  return (
    <>
      <h1>Home</h1>
      <p>This is an example for the home page for the rick router</p>
      <button onClick={() => navigation('/about')}>Ir al about</button>
    </>
  )
}
