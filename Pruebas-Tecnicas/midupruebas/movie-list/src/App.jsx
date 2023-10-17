import { Header } from './components/Header'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useEffect } from 'react'
import { useState } from 'react'

function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search === '') {
      setError('Ingrese la película ha buscar')
      return
    }

    setError(null)
  }, [search])
  return { search, setSearch, error }
}

function App() {
  const { movies } = useMovies()
  const { search, error, setSearch } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(search)
  }

  const handleSearch = (event) => {
    const currentValue = event.target.value
    setSearch(currentValue)
  }
  return (
    <main className='flex flex-col gap-4'>
      <Header
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        error={error}
        search={search}
      />
      <Movies movies={movies} />
    </main>
  )
}

export default App
