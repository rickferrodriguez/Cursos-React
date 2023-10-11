import { useState } from 'react'
import { Header } from './components/Header'
import { Search as ListOfMovies } from './mocks/withResults.json'

function App() {
  const [movies, setMovies] = useState(ListOfMovies)
  return (
    <main className='flex flex-col gap-4'>
      <Header />
      <div className='grid grid-cols-3 gap-3'>
        {movies.map((movie) => (
          <article key={movie.imdbID} className='w-auto'>
            <img
              className='w-auto  aspect-[3/4] object-contain'
              src={movie.Poster}
              alt={movie.Title}
            />
            <section>{movie.Type}</section>
            <h1 className='text-gray-400'>{movie.Title}</h1>
          </article>
        ))}
      </div>
    </main>
  )
}

export default App
