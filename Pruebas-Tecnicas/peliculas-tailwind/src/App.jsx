import { ShowMovies } from './components/ShowMovies.jsx'
import { useGetMovies } from './hooks/useGetMovies.js'
import { useSearch } from './hooks/useSearch.jsx'

function App () {
  const { search, setSearch, error } = useSearch()
  const { movies, responseMovies } = useGetMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    responseMovies()
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return

    setSearch(newSearch)
  }

  return (
    <div className='w-full gap-4 flex flex-col items-center justify-center font-inter'>

      <header className='flex items-center justify-center flex-col gap-4 w-full'>
        <h1 className='text-center font-bold  text-gray-50'>Movie Finder</h1>
        <form className='flex gap-4 h-8' onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text' name='search' value={search} />
          <button
            className='px-4 border-none rounded text-gray-50 bg-sky-400
            hover:bg-sky-600'
            type='submit'
          >
            Search
          </button>
        </form>
        {error && <p className='text-red-400 text-center'>{error}</p>}
      </header>

      <main className='w-full'>
        <ShowMovies movies={movies} />
      </main>
    </div>
  )
}

export default App
