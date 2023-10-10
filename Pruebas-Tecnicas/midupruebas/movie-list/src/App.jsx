import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Search as ListOfMovies } from './mocks/withResults.json'

function App() {
  const [movies, setMovies] = useState(ListOfMovies)
  return (
    <main>
      <Header />
      <div>
        {movies.map((movie) => (
          <article key={movie.imdbID}>
            <h1>{movie.Title}</h1>
          </article>
        ))}
      </div>
    </main>
  )
}

export default App
