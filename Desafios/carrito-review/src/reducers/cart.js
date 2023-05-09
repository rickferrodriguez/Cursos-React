export const cartInitialState = []

export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export function cartReducer (state, action) {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CART_ACTIONS.ADD_TO_CART: {
      const { id } = actionPayload
      const findProductId = state.findIndex(item => item.id === id)

      if (findProductId >= 0) {
        const newCart = structuredClone(state)
        newCart[findProductId].quantity += 1
        return newCart
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }

    case CART_ACTIONS.CLEAR_CART: {
      return []
    }
  }

  return state
}
