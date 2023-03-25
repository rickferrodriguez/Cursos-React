// import withResults from '../mocks/withResults.json'
import { useState, useMemo, useCallback, useRef } from 'react'
import { searchMovies } from '../services/searchMovies.js'
import { filteredMovies } from '../logic/filteredMovies.js'

export function useGetMovies ({ search, sort, onlyMovies, series }) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(search)
  const [, setError] = useState(null)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    }
  }, [])
  const sortedMovies = useMemo(() => {
    return filteredMovies({ sort, movies, onlyMovies, series })
  }, [sort, movies, onlyMovies, series])

  return { movies: sortedMovies, getMovies }
}
