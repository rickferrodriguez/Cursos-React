import { useState } from 'react'
import { searchMovies } from '../services/searchMovies.js'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const newMovies = await searchMovies({ search })
    setMovies(newMovies)
  }

  return { movies, getMovies }
}
