import { searchMovies } from '@/service/searchMovies.js'
import { useState } from 'react'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)

  const getMovies = async () => {
    try {
      const movies = await searchMovies({ search })
      setMovies(movies)
    } catch (error) {
      setError(error.message)
    }
  }

  return { movies, getMovies, error }
}
