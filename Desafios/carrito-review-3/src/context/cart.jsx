import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const { state, addToCart, reduceItemCartQuantity, removeFromCart, clearCart } = useCartReducer()
  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      reduceItemCartQuantity,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
