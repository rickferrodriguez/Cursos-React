import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.jsx'

function App () {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return
    setSearch(newSearch)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text' name='search' value={search} placeholder='Movie Name' />
          <button type='submit'>Buscar</button>
        </form>
        <p className='error'>{error}</p>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
