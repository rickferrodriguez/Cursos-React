import { useState } from 'react'
import withResults from '../mocks/with-results.json'
import withOutResults from '../mocks/no-results.json'

export function useMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    type: movie.Type,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      setResponseMovies(withResults)
    } else {
      setResponseMovies(withOutResults)
    }
  }
  return { movies: mappedMovies, getMovies }
}
