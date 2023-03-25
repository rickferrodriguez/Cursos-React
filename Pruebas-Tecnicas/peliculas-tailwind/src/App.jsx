import { useEffect, useState, useRef } from 'react'
import { Movies } from './components/Movies.jsx'
import { useGetMovies } from './hooks/useGetMovies.js'

export function App () {
  const [search, setSearch] = useState('')
  const { mappedMovies, getMovies } = useGetMovies({ search })
  const [error, setError] = useState(null)
  const firsTimeInput = useRef(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return

    setSearch(newSearch)
  }

  useEffect(() => {
    if (firsTimeInput.current) {
      firsTimeInput.current = search === ''
      return
    }

    if (search === '') {
      setError('ingrese el nombre de una película para buscar')
      return
    }

    setError(null)
  }, [search])

  return (
    <div className='w-full flex flex-col items-center text-gray-100 gap-4'>

      <header className='text-center w-full'>
        <h1>Movie Finder</h1>
        <form className='flex gap-4 justify-center' onSubmit={handleSubmit}>
          <input
            className='p-2'
            onChange={handleChange} value={search}
            type='text' placeholder='Movie Name'
          />
          <button className='bg-sky-400 border-none px-4 rounded' type='submit'>Search</button>
        </form>
        {error && <p className='text-red-500'>{error}</p>}
      </header>

      <main className='w-full'>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
