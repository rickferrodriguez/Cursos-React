import { useMemo, useRef, useState } from 'react'
import { getMovies } from '../services/getMovies.js'

export const useGetMovies = ({ search, sort, onlyMovies }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)
  const previousSearch = useRef(search)

  const searchMovies = async () => {
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
  }

  const sortMovies = useMemo(() => {
    return sortedMovies({ movies, sort, onlyMovies })
  }, [sort, movies, onlyMovies])

  return { movies: sortMovies, searchMovies, loading }
}

function sortedMovies ({ movies, sort, onlyMovies }) {
  console.log({ sort, onlyMovies })
  const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title))
  if (sort === true && onlyMovies === true) {
    return [...sortedMovies].filter(movie => movie.type === 'movie')
  }

  if (sort) {
    return sortedMovies
  }

  if (onlyMovies) {
    return [...movies].filter(movie => movie.type === 'movie')
  }

  return movies
}
