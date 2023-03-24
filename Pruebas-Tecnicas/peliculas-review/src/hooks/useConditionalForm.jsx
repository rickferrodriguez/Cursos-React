import { useEffect, useRef, useState } from 'react'

export function useConditionalForm () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const firstTimeInput = useRef({ search })

  useEffect(() => {
    if (firstTimeInput.current) {
      firstTimeInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Digite el formulario para buscar una película')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
