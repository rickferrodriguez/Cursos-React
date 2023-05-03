import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

export function App () {
  const { movies } = useMovies()
  return (
    <section className='grid gap-5'>
      <header className='grid gap-4 justify-center'>
        <h1 className='font-bold text-sky-400 text-center text-4xl'>Movie Finder</h1>
        <form className='flex gap-3'>
          <input className='px-2 rounded' type='text' id='name' name='name' placeholder='Hulk, Avengers, Harry Potter' />
          <button className='bg-sky-400 px-2 py-1 rounded'>Buscar</button>
        </form>
      </header>

      <Movies movies={movies} />
    </section>
  )
}
