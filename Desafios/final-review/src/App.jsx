import { Movies } from './components/Movies'
import responseMovies from './mocks/withResults.json'

function App () {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0
  return (
    <>
      <header className='flex flex-col gap-4 items-center'>
        <h1 className='text-4xl text-center text-sky-400 font-bold'>Buscador de Películas</h1>
        <form className='flex gap-3'>
          <input className='rounded' type='text' id='movie-name' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {
          hasMovies
            ? (
              <Movies movies={movies} />
              )
            : <p>No hay películas para mostrar</p>
        }
      </main>
    </>
  )
}

export default App
