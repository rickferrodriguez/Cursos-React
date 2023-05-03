import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const lastSearch = useRef(search)

  const getMovies = async () => {
    if (search === lastSearch.current) return

    try {
      setLoading(true)
      setError(null)
      lastSearch.current = search
      const movies = await searchMovies(search)
      setMovies(movies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, error, loading }
}
