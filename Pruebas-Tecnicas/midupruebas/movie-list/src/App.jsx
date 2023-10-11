import { useState } from 'react'
import { Header } from './components/Header'
import { Search as ListOfMovies } from './mocks/withResults.json'
import { Movies } from './components/Movies'

function App() {
  const [movies, setMovies] = useState(ListOfMovies)
  return (
    <main className='flex flex-col gap-4'>
      <Header />
      <Movies movies={movies} />
    </main>
  )
}

export default App
