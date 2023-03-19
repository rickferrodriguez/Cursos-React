import './App.css'
import responseMovies from './mocks/with-results.json'
import { ListOfMovies } from './components/Movies.jsx'
// import withOutResults from './mocks/no-results.json'

function App () {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0
  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <input type='text' placeholder='Avengers, StarWars, The Matrix, ...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {
          hasMovies
            ? <ListOfMovies movies={movies} />
            : (
              <p>no se encotraron peliculas</p>
              )
        }
      </main>
    </div>
  )
}

export default App
