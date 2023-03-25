import { useState, useCallback } from 'react'
import { Movies } from './components/Movies.jsx'
import { FormFilter } from './components/FormFilter.jsx'
import { useGetMovies } from './hooks/useGetMovies.js'
import { useSearchConditionals } from './hooks/useSearchConditionals.jsx'
import debounce from 'just-debounce-it'

export function App () {
  const [sort, setSort] = useState(false)
  const [onlyMovies, setOnlyMovies] = useState(false)
  const { search, setSearch, error } = useSearchConditionals()
  const { movies, getMovies } = useGetMovies({ search, sort, onlyMovies })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , []
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return

    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleOnlyMovies = () => {
    setOnlyMovies(!onlyMovies)
  }

  return (
    <div className='w-[1200px] flex flex-col items-center text-gray-100 gap-4'>

      <header className='text-center w-full'>
        <h1>Movie Finder</h1>
        <FormFilter
          handleSubmit={handleSubmit} handleChange={handleChange}
          handleSort={handleSort} handleOnlyMovies={handleOnlyMovies} sort={sort}
          onlyMovies={onlyMovies} search={search}
        />
        {error && <p className='text-red-500'>{error}</p>}
      </header>

      <main className='w-full'>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
