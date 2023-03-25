import { useState } from 'react'
import { Movies } from './components/Movies.jsx'
import { useGetMovies } from './hooks/useGetMovies.js'
import { useSearchConditionals } from './hooks/useSearchConditionals.jsx'

export function App () {
  const { search, setSearch, error } = useSearchConditionals()
  const [sort, setSort] = useState(false)
  const { movies, getMovies } = useGetMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return

    setSearch(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='w-[1200px] flex flex-col items-center text-gray-100 gap-4'>

      <header className='text-center w-full'>
        <h1>Movie Finder</h1>
        <form className='flex gap-4 justify-center' onSubmit={handleSubmit}>
          <input
            className='p-2'
            onChange={handleChange} value={search}
            type='text' placeholder='Movie Name'
          />
          <input type='checkbox' onChange={handleSort} value={sort} />
          <button className='bg-sky-400 border-none px-4 rounded' type='submit'>Search</button>
        </form>
        {error && <p className='text-red-500'>{error}</p>}
      </header>

      <main className='w-full'>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
