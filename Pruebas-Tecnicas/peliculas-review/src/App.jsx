import './App.css'
import { Movies } from './components/Movies.jsx'
import { useGetMovies } from './hooks/useGetMovies.js'

export function App () {
  const { mappedMovies } = useGetMovies()
  return (
    <div className='page'>

      <header>
        <h1>Movie Finder</h1>
        <form className='form'>
          <input type='text' placeholder='Movie Name' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}
