export const cartInitialState = []

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCart = state.findIndex(item => item.id === id)

      if (productInCart >= 0) {
        const copyCart = structuredClone(state)
        copyCart[productInCart].quantity += 1
        return copyCart
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }

    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }

    case 'CLEAR_CART': {
      return cartInitialState
    }
  }
  return state
}
