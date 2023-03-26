import { useState, useCallback } from 'react'
import { Movies } from './components/Movies.jsx'
import { FormFilter } from './components/FormFilter.jsx'
import { useGetMovies } from './hooks/useGetMovies.js'
import { useSearchConditionals } from './hooks/useSearchConditionals.jsx'
import debounce from 'just-debounce-it'

export function App () {
  const [sort, setSort] = useState(false)
  const [onlyMovies, setOnlyMovies] = useState(false)
  const [series, setSeries] = useState(false)
  const { search, setSearch, error } = useSearchConditionals()
  const { movies, getMovies } = useGetMovies({ search, sort, onlyMovies, series })

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

  const handleSeries = () => {
    setSeries(!series)
  }

  return (
    <div className='w-full max-w-[1200px] flex flex-col gap-4 text-gray-100'>

      <header className='text-center w-full
        max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center'
      >
        <h1 className='text-[42px]'>Movie Finder</h1>
        <FormFilter
          handleSubmit={handleSubmit} handleChange={handleChange}
          handleSort={handleSort} handleOnlyMovies={handleOnlyMovies} sort={sort}
          onlyMovies={onlyMovies} search={search} handleSeries={handleSeries}
          onlySeries={series}
        />
        {error && <p className='text-red-500'>{error}</p>}
      </header>

      <main className='w-full flex justify-center items-center'>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
