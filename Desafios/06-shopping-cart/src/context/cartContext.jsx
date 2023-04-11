import { createContext, useReducer } from 'react'
import { cartInitialState, reducer } from '../reducers/cartReducer'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(reducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeCartItem = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { state, addToCart, removeCartItem, clearCart }
}

export function CartProvider ({ children }) {
  const { state, addToCart, removeCartItem, clearCart } = useCartReducer()
  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeCartItem,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
