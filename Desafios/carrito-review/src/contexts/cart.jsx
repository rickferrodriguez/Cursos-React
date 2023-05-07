import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const findProductId = (product) => {
    return cart.findIndex(item => item.id === product.id)
  }

  const addToCart = (product) => {
    const productId = findProductId(product)

    if (productId >= 0) {
      const newCart = structuredClone(cart)
      newCart[productId].quantity += 1
      return setCart(newCart)
    }

    setCart(lasState => [
      ...lasState,
      {
        ...product,
        quantity: 1
      }
    ])
  }

  const removeFromCart = (product) => {
    const removedItem = [...cart].filter(item => item.id !== product.id)
    setCart(removedItem)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
