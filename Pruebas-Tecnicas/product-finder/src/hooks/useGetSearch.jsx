import { useMemo, useRef, useState } from 'react'
import { getProduct } from '../services/getProduct.js'
// import withResults from '../mocks/withResults.json'

export function useGetSearch ({ search }) {
  const [products, setProducs] = useState([])
  const [loading, setLoading] = useState(null)
  const lastSearch = useRef(search)

  const getProducts = useMemo(() => {
    return async ({ search }) => {
      if (lastSearch.current === search) return

      try {
        lastSearch.current = search
        setLoading(true)
        const items = await getProduct({ search })
        setProducs(items)
      } catch (err) {
        setProducs(err)
      } finally {
        setLoading(false)
      }
    }
  }, [])
  return { products, getProducts, loading }
}
