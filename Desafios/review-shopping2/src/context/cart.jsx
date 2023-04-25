import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const isProductInCart = (products) => {
    return cart.findIndex(item => item.id === products.id)
  }

  const addToCart = (product) => {
    console.log(isProductInCart(product))
    if (isProductInCart(product) >= 0) {
      const newCart = structuredClone(cart)
      newCart[isProductInCart].quantity += 1
      setCart(newCart)
    }

    return setCart(prevState => ([
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
      setCart,
      addToCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
