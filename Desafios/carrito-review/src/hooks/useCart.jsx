import { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export function useCart () {
  const { addToCart, cart, removeFroCart } = useContext(CartContext)
  return { addToCart, cart, removeFroCart }
}
