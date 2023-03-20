import './App.css'
import { useEffect, useState } from 'react'

import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'

export function App () {
  const { mappedMovies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(query)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
  }

  useEffect(() => {
    if (query === '') {
      setError('Ingrese un valor para buscar la película')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un número')
      return
    }

    if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Películas</h1>
        <form action='' className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text' value={query} name='query' placeholder='Nombre Película' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>

    </div>
  )
}
