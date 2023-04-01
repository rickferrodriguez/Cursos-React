import { useState } from 'react'
import { getProduct } from '../services/getProduct.js'
// import withResults from '../mocks/withResults.json'

export function useGetSearch ({ search }) {
  const [products, setProducs] = useState([])

  const getProducts = async () => {
    if (search === ' ') return null

    try {
      const games = await getProduct({ search })
      setProducs(games)
    } catch (err) {
      setProducs(err)
    }
  }

  return { products, getProducts }
}
