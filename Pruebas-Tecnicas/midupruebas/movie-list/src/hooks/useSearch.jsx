import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Indique el nombre de la película a buscar')
      return
    }

    setError(null) // en vez de colocar el error en un string vacío, mejor devolverlo como null
  }, [search])
  return { search, setSearch, error }
}
