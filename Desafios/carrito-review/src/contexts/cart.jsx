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
      setCart(lastState => {
        const newCart = structuredClone(cart)
        newCart[productId].quantity += 1
        lastState(newCart)
      })
    }

    setCart(lasState => [
      ...lasState,
      {
        ...product,
        quantity: 1
      }
    ])
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
