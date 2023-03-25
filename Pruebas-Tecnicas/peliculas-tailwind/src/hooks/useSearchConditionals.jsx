import { useEffect, useState, useRef } from 'react'

export function useSearchConditionals () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const firsTimeInput = useRef(true)

  useEffect(() => {
    if (firsTimeInput.current) {
      firsTimeInput.current = search === ''
      return
    }

    if (search === '') {
      setError('ingrese el nombre de una película para buscar')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
