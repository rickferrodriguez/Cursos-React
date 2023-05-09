import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filter, setFilter } = useContext(FiltersContext)
  const filterProducts = (products) => {
    return products?.filter((product) => {
      return product.price >= filter.minPrice && (
        filter.category === 'all' ||
        filter.category === product.category
      )
    })
  }

  return { filterProducts, setFilter, filter }
}
