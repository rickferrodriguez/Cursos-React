import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

export function App () {
  const { search, error, setSearch } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
    console.log(search)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  return (
    <section className='grid gap-5'>
      <header className='grid gap-4 justify-center'>
        <h1 className='font-bold text-sky-400 text-center text-4xl'>Movie Finder</h1>
        <form className='flex gap-3' onSubmit={handleSubmit}>
          <input className='px-2 rounded text-gray-900' type='text' onChange={handleChange} value={search} id='name' name='name' placeholder='Hulk, Avengers, Harry Potter' />
          <button type='submit' className='bg-sky-400 px-2 py-1 rounded'>Buscar</button>
        </form>
        <small className='text-red-500 text-center'>{error}</small>
      </header>

      <Movies movies={movies} />
    </section>
  )
}
