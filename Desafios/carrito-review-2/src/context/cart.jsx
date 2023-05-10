import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const findProductInCart = product => {
    cart.filter(item => item.id === product.id)
  }

  const addToCart = product => {
    const productInCartIndex = findProductInCart(product)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      setCart(newCart)
    }

    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
