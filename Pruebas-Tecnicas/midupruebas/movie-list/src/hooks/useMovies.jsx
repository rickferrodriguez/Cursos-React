import { useState } from 'react'
import withResults from '../mocks/withResults.json'
import noResultMovies from '../mocks/no-results.json'

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search // si el resultado es el correcto vamos a tener el json de movies

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    date: movie.Year,
    type: movie.Type
  }))

  const getMovies = () => {
    if (search) {
      setResponseMovies(withResults)
    } else {
      setResponseMovies(noResultMovies)
    }
  }
  return { movies: mappedMovies, getMovies }
}
