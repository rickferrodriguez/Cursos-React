import { useState } from 'react'
import withOutResults from '../mocks/no-results.json'
import mocksMovies from '../mocks/withResults.json'

export function useMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    title: movie.Title,
    image: movie.Poster,
    type: movie.Type,
    year: movie.Year,
    id: movie.imdbID
  }))

  const getMovies = () => {
    if (search !== '') {
      setResponseMovies(mocksMovies)
    } else {
      setResponseMovies(withOutResults)
    }
  }

  return { movies: mappedMovies, getMovies }
}
