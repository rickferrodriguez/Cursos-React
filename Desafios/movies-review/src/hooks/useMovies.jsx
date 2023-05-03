import { searchMovies } from '@/service/searchMovies.js'
import { useCallback, useMemo, useRef, useState } from 'react'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const lastSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (lastSearch.current === search) return

    try {
      const movies = await searchMovies({ search })
      lastSearch.current = search
      setMovies(movies)
    } catch (error) {
      setError(error.message)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, error }
}
