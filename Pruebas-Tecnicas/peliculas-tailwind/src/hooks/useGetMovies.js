import { useRef, useState } from 'react'
import { getMovies } from '../services/getMovies.js'

export function useGetMovies ({ search }) {
  const [movies, setResponseMovies] = useState([])
  const [error, setError] = useState(null)
  const lastMovieSearched = useRef(search)

  const responseMovies = async () => {
    if (search === lastMovieSearched.current) return

    try {
      lastMovieSearched.current = search
      const newMovies = await getMovies({ search })
      setResponseMovies(newMovies)
    } catch (e) {
      setError(e.message)
    }
  }
  return { movies, responseMovies, error }
}
