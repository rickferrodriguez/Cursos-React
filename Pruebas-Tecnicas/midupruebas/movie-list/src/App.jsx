import { useState } from 'react'
import { SearchIcon } from './components/Icons'
import { Movies } from './components/Movies'
import { useEffect } from 'react'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()

  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(search)
    setSearch('')
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }
  useEffect(() => {
    if (search === '') {
      setError('Indique el nombre de la película a buscar')
      return
    } else {
      setError('')
      return
    }
  }, [search])
  return (
    <>
      <header className='flex flex-col items-center gap-4 mb-9'>
        <h1 className='text-xl text-center text-gray-100 font-bold'>
          Search Movies...
        </h1>
        <form
          className={`flex gap-2 items-center bg-slate-950  rounded-md px-2 py-2 md:w-[50%] w-full ${
            error ? 'border border-red-500 ' : 'border border-transparent'
          }`}
          onSubmit={handleSubmit}
        >
          <button className='px-2'>
            <i className='scale-[20%] text-gray-400 hover:text-gray-200'>
              <SearchIcon />
            </i>
          </button>
          <input
            type='text'
            value={search}
            onChange={handleChange}
            className={`w-full text-gray-300 py-1  bg-slate-950 outline-none  text-base`}
            placeholder='Search movies...'
          />
        </form>
        <span className='text-red-500 h-3'>{error}</span>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
