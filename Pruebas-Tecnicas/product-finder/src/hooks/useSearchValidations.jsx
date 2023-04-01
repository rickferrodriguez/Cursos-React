import { useEffect, useRef, useState } from 'react'

export function useSearchValidations () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const firtsTimeInput = useRef(search)
  useEffect(() => {
    if (firtsTimeInput.current === '') {
      firtsTimeInput.current = search
      return
    }

    if (search === '') {
      return setError('Ingresa un producto para buscar')
    }

    if (search === 'camisas') {
      return setError('Ingresa un producto valido')
    }

    return setError(null)
  }, [search])

  return { search, setSearch, error }
}
