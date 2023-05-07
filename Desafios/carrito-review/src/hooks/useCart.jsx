import { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export function useCart () {
  const { addToCart, cart, removeFromCart } = useContext(CartContext)
  return { addToCart, cart, removeFromCart }
}
