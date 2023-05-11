import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function useCart () {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('The use of this context has to be inside the CartProvider')
  }

  console.log({ context })
  return context
}
