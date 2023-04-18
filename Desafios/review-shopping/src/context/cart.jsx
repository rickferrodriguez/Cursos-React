import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const productInCart = (product) => {
    return cart.findIndex(item => item.id === product.id)
  }

  const addToCart = (product) => {
    const isProductInCart = productInCart(product)

    if (isProductInCart >= 0) {
      const copyCart = structuredClone(cart)
      console.log(copyCart)
      copyCart[isProductInCart].quantity += 1
      setCart(copyCart)
    } else {
      setCart((prevState) => [
        ...prevState,
        {
          ...product,
          quantity: 1
        }
      ])
    }
  }

  const removeFromCart = () => {
    setCart([])
  }
  return (
    <CartContext.Provider value={
      {
        cart,
        setCart,
        addToCart,
        removeFromCart
      }
    }
    >
      {children}
    </CartContext.Provider>
  )
}
