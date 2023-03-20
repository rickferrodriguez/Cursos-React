import './App.css'
import withResults from './mocks/with-results.json'

export function App () {
  const movies = withResults.Search
  const hasMovies = movies?.length > 0

  const handleSubmit = (event) => {
    event.preventDefault()
    const movieName = Object.fromEntries(event)
  }
  return (
    <div className='page'>

      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input type='text' name='movie' placeholder='Avengers, Harry Potter, The Matrix, ...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <ul className='movies'>
          {
            hasMovies
              ? movies.map(movie => (
                <li key={movie.imdbID} className='movie'>
                  <img src={movie.Poster} alt={movie.Title} />
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                </li>
              ))
              : (
                <p>no existe esta película</p>
                )
          }
        </ul>
      </main>
    </div>
  )
}
