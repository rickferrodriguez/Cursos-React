import './App.css'
import { Movies } from './components/Movies.jsx'
import { useGetMovies } from './hooks/useGetMovies.js'
import { useConditionalForm } from './hooks/useConditionalForm.jsx'
import { useState } from 'react'

export function App () {
  const [check, setCheck] = useState(false)
  const { search, setSearch, error } = useConditionalForm()
  const { movies, searchMovies } = useGetMovies({ search, check })

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
    setCheck(!check)
  }

  return (
    <div className='page'>

      <header>
        <h1>Movie Finder</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} type='text' placeholder='Movie Name' />
          <input type='checkbox' onChange={handleCheck} value={check} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
