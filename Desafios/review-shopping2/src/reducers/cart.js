
export const cartState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CART_ACTIONS.ADD_TO_CART : {
      const { id } = actionPayload
      const isProductInCart = state.findIndex(item => item.id === id)

      if (isProductInCart >= 0) {
        const newCart = structuredClone(state)
        newCart[isProductInCart].quantity += 1
        updateLocalStorage(newCart)
        return newCart
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTIONS.REMOVE_FROM_CART : {
      const { id } = actionPayload
      const newState = state.filter((item) => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTIONS.CLEAR_CART : {
      updateLocalStorage([])
      return []
    }
  }
}
