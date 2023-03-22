import { useRef, useEffect, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const firtTimeInput = useRef(true)

  useEffect(() => {
    if (firtTimeInput.current) {
      firtTimeInput.current = search === ''
      return
    }
    if (search === '') {
      setError('Ingrese datos dentro del campo de texto')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
