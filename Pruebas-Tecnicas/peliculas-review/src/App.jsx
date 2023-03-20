import './App.css'
import { Movies } from './components/Movies.jsx'

export function App () {
  return (
    <div className='page'>

      <header>
        <h1>Buscador de Películas</h1>
        <form action='' className='form'>
          <input type='text' name='movie-name' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <ul className='movies'>
          <Movies />
        </ul>
      </main>

    </div>
  )
}
