import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productId = cart.findIndex(item => item.id === product.id)

    if (productId >= 0) {
      const copyCart = structuredClone(cart)
      copyCart[productId].quantity += 1
      return setCart(copyCart)
    }

    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeCartItem = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeCartItem,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
