import './App.css'
import withResults from './mocks/with-results.json'

export function App () {
  const movies = withResults.Search
  const hasMovies = movies?.length > 0
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
          {
            hasMovies
              ? movies.map(movie => (
                <li key={movie.imdbID}>
                  <img src={movie.Poster} alt={movie.Title} />
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                </li>
              ))
              : (
                <p>No hay resultados para esta película</p>
                )
          }
        </ul>
      </main>

    </div>
  )
}
