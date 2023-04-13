import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInCartIndex >= 0) {
      const copyCart = structuredClone(cart)
      copyCart[productInCartIndex].quantity += 1
      return setCart(copyCart)
    }

    setCart((prevState) => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const reduceItemFromCart = product => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInCartIndex >= 0 && cart[productInCartIndex].quantity > 0) {
      const copyCart = structuredClone(cart)
      copyCart[productInCartIndex].quantity -= 1
      return setCart(copyCart)
    }
  }

  const removeFromCart = product => {
    setCart((prevState) => {
      return prevState.filter(item => item.id !== product.id)
    })
  }

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      reduceItemFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
