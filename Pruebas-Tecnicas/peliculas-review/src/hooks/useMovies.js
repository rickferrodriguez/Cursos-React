import { useState } from 'react'
// import withResults from '../mocks/withResults.json'
import noResult from '../mocks/noResults.json'

const PREFIX_MOVIES = 'https://www.omdbapi.com/?apikey=5a03f14a'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  // const movies = withResults.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    type: movie.Type,
    poster: movie.Poster
  }))

  const searchMovies = () => {
    if (search) {
      fetch(`${PREFIX_MOVIES}&s=${search}`)
        .then(res => res.json())
        .then(data => {
          setMovies(data.Search)
        })
    } else {
      setMovies(noResult.Response)
    }
  }

  return { mappedMovies, searchMovies }
}
