import { useCallback, useMemo, useRef, useState } from 'react'
import { getMovies } from '../services/getMovies.js'
import { filteredMovies } from '../logic/filteredMovies.js'

export function useGetMovies ({ search, sort, onlyMovies }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)
  const previousSearch = useRef(search)

  const searchMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      previousSearch.current = search
      const newMovies = await getMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortMovies = useMemo(() => {
    return filteredMovies({ movies, sort, onlyMovies })
  }, [sort, onlyMovies, movies])

  return { movies: sortMovies, searchMovies, loading }
}
