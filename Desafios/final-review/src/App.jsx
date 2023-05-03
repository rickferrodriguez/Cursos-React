import { useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { search, setSearch, error } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies(search)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return
    setSearch(newSearch)
    getMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <section className='flex flex-col gap-8'>
      <header className='flex flex-col gap-4 items-center'>
        <h1 className='text-4xl text-center text-sky-400 font-bold'>
          Buscador de Películas
        </h1>
        <form className='flex gap-3' onSubmit={handleSubmit}>
          <input
            className='rounded text-gray-950 px-2'
            type='text'
            id='movie-name'
            onChange={handleChange}
            value={search}
            placeholder='Avengers, Hulk, Harry Potter'
          />
          <div className='flex gap-2 items-center border border-sky-200 px-2 rounded'>
            <label htmlFor='sort'>Ordenar A-Z</label>
            <input type='checkbox' id='sort' name='sort' value={sort} onChange={handleSort} />
          </div>
          <button
            className='bg-sky-400 rounded border border-white px-2 py-1 font-bold'
            type='submit'
          >
            Buscar
          </button>
        </form>
        <small className='text-red-500'>{error}</small>
      </header>

      <main>
        {
          loading
            ? <p className='text-center text-sky-300 font-bold'>Cargando...</p>
            : <Movies movies={movies} />
        }

      </main>
    </section>
  )
}

export default App
