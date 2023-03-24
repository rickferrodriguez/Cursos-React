import './App.css'
import withResults from './mocks/withResults.json'
import { Movies} from './components/Movies.jsx'

export function App () {
  const movies = withResults.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year,
    type: movie.Type
  }))
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
