import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [filters, setFilters] = useState({
    categories: 'all',
    minPrice: 0
  })

  return (
    <CartContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
