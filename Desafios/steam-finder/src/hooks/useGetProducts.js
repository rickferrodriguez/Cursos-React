import { useState } from 'react'
import { getGames } from '../services/getGames'

export function useGetProducts ({ search }) {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)

  const getSteamGames = async () => {
    if (search === '') return null

    try {
      const newGames = await getGames(search)
      setLoading(true)
      setGames(newGames)
    } catch (error) {
      throw new Error(error)
    } finally {
      setLoading(false)
    }
  }

  return { games, getSteamGames, loading }
}
