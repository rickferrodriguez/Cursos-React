import { useMemo, useRef, useState } from 'react'
import { getProduct } from '../services/getProduct.js'
// import withResults from '../mocks/withResults.json'

export function useGetSearch ({ search }) {
  const [products, setProducs] = useState([])
  const lastSearch = useRef(search)

  const getProducts = useMemo(() => {
    return async ({ search }) => {
      if (lastSearch.current === search) return

      try {
        lastSearch.current = search
        const items = await getProduct({ search })
        setProducs(items)
      } catch (err) {
        setProducs(err)
      }
    }
  }, [])
  return { products, getProducts }
}
