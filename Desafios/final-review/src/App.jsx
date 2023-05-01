import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { mappedMovies } = useMovies()
  return (
    <section className='flex flex-col gap-8'>
      <header className='flex flex-col gap-4 items-center'>
        <h1 className='text-4xl text-center text-sky-400 font-bold'>Buscador de Películas</h1>
        <form className='flex gap-3'>
          <input className='rounded' type='text' id='movie-name' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </section>
  )
}

export default App
