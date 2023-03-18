import { useEffect, useState } from 'react'
import { getNewFact } from '../logic/getNewFact.js'

export const useCustomFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getNewFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
