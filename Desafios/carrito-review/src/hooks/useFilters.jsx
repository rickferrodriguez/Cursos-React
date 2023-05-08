import { useContext } from 'react'
import { FilterContext } from '../contexts/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FilterContext)
  const filterProducts = (products) => {
    return products.filter(item => {
      return (
        item.price >= filters.minPrice &&
        (filters.category === 'all' || item.category === filters.category)
      )
    })
  }

  return { filterProducts, setFilters, filters }
}
