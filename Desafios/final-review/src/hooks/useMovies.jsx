import { useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const lastSearch = useRef(search)

  const getMovies = useMemo(() => {
    return async (search) => {
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
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, error, loading }
}
