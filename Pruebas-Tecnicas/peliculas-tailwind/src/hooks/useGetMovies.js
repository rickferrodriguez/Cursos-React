import { useState } from 'react'
import { getMovies } from '../services/getMovies.js'

export function useGetMovies ({ search }) {
  const [movies, setResponseMovies] = useState([])

  const responseMovies = async () => {
    const newMovies = await getMovies({ search })
    setResponseMovies(newMovies)
  }
  return { movies, responseMovies }
}
