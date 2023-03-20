import './App.css'

import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'

export function App () {
  const { mappedMovies } = useMovies()
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
        <Movies movies={mappedMovies} />
      </main>

    </div>
  )
}
