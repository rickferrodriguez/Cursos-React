import { useCallback, useMemo, useRef, useState } from 'react'
import { getMovies } from '../services/getMovies.js'

export function useGetMovies ({ search, sort }) {
  const [movies, setResponseMovies] = useState([])
  const [error, setError] = useState(null)
  const lastMovieSearched = useRef(search)

  const responseMovies = useCallback(async ({ search }) => {
    if (search === lastMovieSearched.current) return

    try {
      lastMovieSearched.current = search
      const newMovies = await getMovies({ search })
      setResponseMovies(newMovies)
    } catch (e) {
      setError(e.message)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    const sorted = [...movies].sort((a, b) => a.title.localeCompare(b.title))
    if (sort) {
      return sorted
    }

    return movies
  }, [sort, movies])

  return { movies: sortedMovies, responseMovies, error }
}
