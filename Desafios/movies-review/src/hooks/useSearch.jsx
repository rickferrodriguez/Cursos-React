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
      setError('Please enter a movie to search')
      return
    }

    return setError(null)
  }, [search])

  return { search, setSearch, error }
}
