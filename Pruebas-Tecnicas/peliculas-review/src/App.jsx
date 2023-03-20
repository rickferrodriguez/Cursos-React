import './App.css'

import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useSearch } from './hooks/useSearch.js'

export function App () {
  const { mappedMovies } = useMovies()
  const { error, search, setSearch } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(search)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return
    setSearch(newSearch)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Películas</h1>
        <form action='' className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text' value={search} name='query' placeholder='Nombre Película' />
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
