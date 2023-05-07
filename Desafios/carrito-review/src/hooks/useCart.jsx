import { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export function useCart () {
  const { addToCart, cart, removeFromCart, clearCart } = useContext(CartContext)
  return { addToCart, cart, removeFromCart, clearCart }
}
