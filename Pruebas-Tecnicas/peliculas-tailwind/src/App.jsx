import { useState } from 'react'
import { ShowMovies } from './components/ShowMovies.jsx'
import { useGetMovies } from './hooks/useGetMovies.js'
import { useSearch } from './hooks/useSearch.jsx'

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, responseMovies } = useGetMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    responseMovies({ search })
  }
  const handleSort = () => {
    setSort(!sort)
  }
  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    responseMovies({ search: newSearch })
  }

  return (
    <div className='w-full gap-4 flex flex-col items-center justify-center font-inter'>

      <header className='flex items-center justify-center flex-col gap-4 w-full'>
        <h1 className='text-center font-bold  text-gray-50'>Movie Finder</h1>
        <form className='flex gap-4 h-[120px]' onSubmit={handleSubmit}>
          <input className='h-[30px]' onChange={handleChange} type='text' name='search' value={search} />
          <fieldset className='text-gray-50'>
            <p>filters</p>
            <div>
              <input type='checkbox' onChange={handleSort} checked={sort} />
              <label>Sort A-Z</label>
            </div>
          </fieldset>
          <button
            className='px-4 h-[40px] border-none rounded text-gray-50 bg-sky-400
            hover:bg-sky-600'
            type='submit'
          >
            Search
          </button>
        </form>
        {error && <p className='text-red-400 text-center'>{error}</p>}
      </header>

      <main className='w-full my-8'>
        <ShowMovies movies={movies} />
      </main>
    </div>
  )
}

export default App
