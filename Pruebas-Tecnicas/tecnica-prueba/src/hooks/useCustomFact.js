import { useEffect, useState } from 'react'
import { getNewFact } from '../logic/getNewFact.js'

export const useCustomFact = () => {
  const [fact, setFact] = useState()

  useEffect(() => {
    getNewFact().then(newFact => setFact(newFact))
  }, [])
  return { fact, setFact }
}
