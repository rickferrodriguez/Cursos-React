import { useState } from 'react'
import { Header } from './components/Header'
import { Search as ListOfMovies } from './mocks/withResults.json'
import { Movies } from './components/Movies'

function App() {
  const [movies, setMovies] = useState(ListOfMovies)
  const [filters, setFilters] = useState({
    type: 'all'
  })

  const handleFilter = ({ filter }) => {
    setFilters({
      type: filter
    })
  }

  const filteredMovies = movies.filter((movie) => {
    let myFilter = filters.type
    if (myFilter === 'movie') {
      return movie
    } else if (myFilter === 'series') {
      return movie
    } else {
      return movie
    }
  })
  return (
    <main className='flex flex-col gap-4'>
      <Header handleFilter={handleFilter} />
      <Movies movies={filteredMovies} />
    </main>
  )
}

export default App
