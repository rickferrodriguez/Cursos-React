import noResults from '@/mocks/no-results.json'
import withResults from '@/mocks/with-results.json'
import { useState } from 'react'

export function useMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search
  const mappedMovies = movies?.map(movie => ({
    title: movie.Title,
    image: movie.Poster,
    type: movie.Type,
    id: movie.imdbID,
    year: movie.Year
  }))

  const getMovies = () => {
    if (search) {
      setResponseMovies(withResults)
    } else {
      setResponseMovies(noResults)
    }
  }

  return { movies: mappedMovies, getMovies }
}
