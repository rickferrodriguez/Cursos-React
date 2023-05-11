import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const findProductInCart = (product) => {
    return cart.findIndex(item => item.id === product.id)
  }

  const addToCart = (product) => {
    const productInCartId = findProductInCart(product)

    if (productInCartId >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartId].quantity += 1
      return setCart(newCart)
    }

    return setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const reduceItemCartQuantity = (product) => {
    const productInCartId = findProductInCart(product)

    if (productInCartId >= 0) {
      const newCart = structuredClone(cart)
      if (newCart[productInCartId].quantity <= 1) return

      newCart[productInCartId].quantity -= 1
      return setCart(newCart)
    }

    return setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = (product) => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      reduceItemCartQuantity
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
