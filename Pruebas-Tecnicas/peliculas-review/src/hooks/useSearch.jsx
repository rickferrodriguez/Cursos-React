import { useEffect, useState, useRef } from 'react'

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
      setError('Digite este formulario para buscar')
      return
    }

    if (search.length < 3) {
      setError('Digite más de tres campos dentro del formulario')
      return
    }

    setError(null)
  }, [search])
  return { search, setSearch, error }
}
