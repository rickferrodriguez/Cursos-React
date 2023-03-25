// import withResults from '../mocks/withResults.json'
import noResults from '../mocks/noResults.json'
import { useState } from 'react'
import { searchMovies } from '../services/searchMovies.js'

export function useGetMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    if (search) {
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } else {
      setMovies(noResults)
    }
  }

  const sortedMovies = () => {
    if (sort) {
      return [...movies].sort((a, b) => a.title.localeCompare(b.title))
    } else {
      return movies
    }
  }

  return { movies: sortedMovies(), getMovies }
}
