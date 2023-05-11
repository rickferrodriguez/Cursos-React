import { useContext } from 'react'
import { CartContext } from '../context/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(CartContext)
  const filterProducts = (products) => {
    return products.filter(product => {
      return product.price >= filters.minPrice && (
        filters.categories === 'all' ||
        filters.categories === product.category
      )
    })
  }

  return { filters, setFilters, filterProducts }
}
