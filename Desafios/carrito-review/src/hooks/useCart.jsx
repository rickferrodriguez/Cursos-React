import { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export function useCart () {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart mus be used within a CartProvider')
  }

  return context
}
