import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const firstTimeInput = useRef(true)

  useEffect(() => {
    if (firstTimeInput.current) {
      firstTimeInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Ingrese el nombre de una película para buscar')
      return
    }

    setError(null)
  }, [search])

  return { search, error, setSearch }
}
