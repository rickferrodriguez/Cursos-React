import { useMemo, useState } from 'react'
import { getGames } from '../services/getGames'

export function useGetProducts ({ search, filter }) {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)

  const getSteamGames = async () => {
    if (search === '') return null

    try {
      setLoading(true)
      const newGames = await getGames(search)
      setGames(newGames)
    } catch (error) {
      throw new Error(error)
    } finally {
      setLoading(false)
    }
  }

  const filteredGames = useMemo(() => {
    if (filter) {
      return [...games].sort((a, b) => a.title.localeCompare(b.title))
    } else {
      return games
    }
  }, [games, filter])

  return { games: filteredGames, getSteamGames, loading }
}
