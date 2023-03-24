import { useState } from 'react'
import { getMovies } from '../services/getMovies.js'

export const useGetMovies = ({ search, check }) => {
  const [movies, setMovies] = useState([])

  const searchMovies = async () => {
    const newMovies = await getMovies({ search })
    setMovies(newMovies)
  }

  const sortMovies = check
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies

  return { movies: sortMovies, check, searchMovies }
}
