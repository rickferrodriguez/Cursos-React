import { useState, useEffect } from 'react'
import { getRandomFact } from '../logic/getRandomFact.js'

export const useGetRandomFact = () => {
  const [fact, setFact] = useState()
  const setFactState = () => {
    getRandomFact().then(res => setFact(res))
  }
  useEffect(() => {
    setFactState()
  }, [])
  return { fact, setFactState }
}
