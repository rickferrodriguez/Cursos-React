import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return
    setSearch(newSearch)
  }

  return (
    <section className='flex flex-col gap-8'>
      <header className='flex flex-col gap-4 items-center'>
        <h1 className='text-4xl text-center text-sky-400 font-bold'>
          Buscador de Películas
        </h1>
        <form className='flex gap-3' onSubmit={handleSubmit}>
          <input
            className='rounded text-gray-950 px-2'
            type='text'
            id='movie-name'
            onChange={handleChange}
            value={search}
            placeholder='Avengers, Hulk, Harry Potter'
          />
          <button
            className='bg-sky-400 rounded border border-white px-2 py-1 font-bold'
            type='submit'
          >
            Buscar
          </button>
        </form>
        <small className='text-red-500'>{error}</small>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </section>
  )
}

export default App
