import { useEffect, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  useEffect(() => {
    if (search === '') {
      setError('Ingrese el nombre de una película para buscar')
      return
    }

    setError(null)
  }, [search])

  return { search, error, setSearch }
}
