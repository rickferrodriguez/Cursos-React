import { useRef, useState } from 'react'
import { searchMovies } from '../services/searchMovies.js'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(search)

  const getMovies = async () => {
    if (search === previousSearch.current) return

    const newMovies = await searchMovies({ search })
    setMovies(newMovies)
  }

  return { movies, getMovies }
}
