import { useState } from 'react'
import withResults from '../mocks/withResults.json'
import noResults from '../mocks/noResults.json'

export const useGetMovies = ({ search }) => {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year,
    type: movie.Type
  }))

  const searchMovies = () => {
    if (search) {
      setResponseMovies(withResults)
    } else {
      setResponseMovies(noResults)
    }
  }

  return { mappedMovies, searchMovies }
}
