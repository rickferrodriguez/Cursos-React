import { Link } from '../Link'

export default function About ({ handleClick }) {
  return (
    <section>
      <h1>About</h1>
      <img src='https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_400x400.jpg' alt='Foto Midudev' />
      <p>Hola soy Miguel Angel y este es un About me</p>
      <Link to='/'>Ir al Home</Link>
    </section>
  )
}
