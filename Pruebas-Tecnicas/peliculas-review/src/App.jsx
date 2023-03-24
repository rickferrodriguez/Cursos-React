import './App.css'
import { Movies } from './components/Movies.jsx'
import { useGetMovies } from './hooks/useGetMovies.js'
import { useConditionalForm } from './hooks/useConditionalForm.jsx'
import { useState } from 'react'

export function App () {
  const [sort, setSort] = useState(false)
  const [onlyMovies, setOnlyMovies] = useState(false)
  const { search, setSearch, error } = useConditionalForm()
  const { movies, searchMovies, loading } = useGetMovies({ search, sort, onlyMovies })

  const handleSubmit = (event) => {
    event.preventDefault()
    searchMovies()
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return

    setSearch(newSearch)
  }

  const handleCheck = () => {
    setSort(!sort)
  }

  const handleOnlyMovies = () => {
    setOnlyMovies(!onlyMovies)
  }

  return (
    <div className='page'>

      <header>
        <h1>Movie Finder</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} type='text' placeholder='Movie Name' />
          <section className='filter'>
            <div>
              <span>Sort A-Z</span>
              <input type='checkbox' onChange={handleCheck} value={sort} />
            </div>
            <div>
              <span>movies</span>
              <input type='checkbox' onChange={handleOnlyMovies} value={onlyMovies} />
            </div>
          </section>
          <button type='submit'>Buscar</button>
        </form>
        {
          error && <p className='error'>{error}</p>
        }
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}
