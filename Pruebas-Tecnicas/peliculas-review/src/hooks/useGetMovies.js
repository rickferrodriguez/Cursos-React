import { useState } from 'react'
import noResults from '../mocks/noResults.json'

const PREFIX_MOVIES = 'http://www.omdbapi.com/?apikey=5a03f14a'

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
      fetch(`${PREFIX_MOVIES}&s=${search}`)
        .then(response => response.json())
        .then(data => {
          setResponseMovies(data)
        })
    } else {
      setResponseMovies(noResults)
    }
  }

  return { mappedMovies, searchMovies }
}
