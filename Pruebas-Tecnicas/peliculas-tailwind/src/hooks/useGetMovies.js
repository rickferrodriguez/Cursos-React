// import withResults from '../mocks/withResults.json'
import noResults from '../mocks/noResults.json'
import { useState } from 'react'
const PREFIX_MOVIES = 'http://www.omdbapi.com/?apikey=5a03f14a'

export function useGetMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    type: movie.Type
  }))

  const getMovies = () => {
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

  return { mappedMovies, getMovies }
}
