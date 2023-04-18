import { createContext, useState } from 'react'

export const FilterContext = createContext()

export function FilterProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return product.price >= filters.minPrice && (
        filters.category === 'all' ||
        filters.category === product.category
      )
    })
  }
  return (
    <FilterContext.Provider value={{
      filters,
      setFilters,
      filterProducts
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}
