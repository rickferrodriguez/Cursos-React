import { searchMovies } from '@/service/searchMovies.js'
import { useRef, useState } from 'react'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const lastSearch = useRef(search)

  const getMovies = async () => {
    if (lastSearch.current === search) return

    try {
      const movies = await searchMovies({ search })
      lastSearch.current = search
      setMovies(movies)
    } catch (error) {
      setError(error.message)
    }
  }

  return { movies, getMovies, error }
}
