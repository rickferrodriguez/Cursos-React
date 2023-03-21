import { useState } from 'react'
// import withResults from '../mocks/with-results.json'
import withOutResults from '../mocks/no-results.json'

const PELI_ENDPOINT = 'http://www.omdbapi.com/?apikey=5a03f14a'

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
      // setResponseMovies(getMoviesFromName)
      fetch(`${PELI_ENDPOINT}&s=${search}`)
        .then(res => res.json())
        .then(data => {
          setResponseMovies(data)
        })
    } else {
      setResponseMovies(withOutResults)
    }
  }
  return { movies: mappedMovies, getMovies }
}
