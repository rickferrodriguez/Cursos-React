import { useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

export function App () {
  const { search, error, setSearch } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    getMovies({ search: newSearch })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <section className='grid gap-5'>
      <header className='grid gap-4 justify-center'>
        <h1 className='font-bold text-sky-400 text-center text-4xl'>
          Movie Finder
        </h1>
        <form className='flex gap-3' onSubmit={handleSubmit}>
          <input
            className='px-2 rounded text-gray-900'
            type='text'
            onChange={handleChange}
            value={search}
            id='name'
            name='name'
            placeholder='Hulk, Avengers, Harry Potter'
          />
          <section className='flex px-2 gap-3 items-center border border-sky-400 rounded'>
            <label htmlFor='sort'>Sort A-Z</label>
            <input
              type='checkbox'
              name='sort'
              id='name'
              value={sort}
              onChange={handleSort}
            />
          </section>
          <button type='submit' className='bg-sky-400 px-2 py-1 rounded'>
            Buscar
          </button>
        </form>
        <small className='text-red-500 text-center'>{error}</small>
      </header>

      {loading
        ? (
          <small className='text-center font-bold text-sky-300'>Loading...</small>
          )
        : (
          <Movies movies={movies} />
          )}
    </section>
  )
}
