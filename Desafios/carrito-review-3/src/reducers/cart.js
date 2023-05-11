
export const cartInitialState = []

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case ('ADD_TO_CART') : {
      const { id } = actionPayload
      const productInCartId = state.findIndex(item => item.id === id)

      if (productInCartId >= 0) {
        const newCart = structuredClone(state)
        newCart[productInCartId].quantity += 1
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

    case ('REDUCE_ITEM_CART_QUANTITY') : {
      const { id } = actionPayload
      const productInCartId = state.findIndex(item => item.id === id)

      if (productInCartId >= 0) {
        const newCart = structuredClone(state)
        if (newCart[productInCartId].quantity <= 1) break

        newCart[productInCartId].quantity -= 1
        return newCart
      } else {
        return [
          ...state,
          {
            ...actionPayload,
            quantity: 1
          }
        ]
      }
    }

    case ('REMOVE_FROM_CART') : {
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }

    case ('CLEAR_CART') : {
      return []
    }
  }

  return state
}
