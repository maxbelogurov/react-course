import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
  },
  selectors: {
    selectCartItems: (state) => state.items,
    selectMenuQuantityInCartById: (state, id) => {
      return state.items[id]?.quantity || 0
    },
    selectCartTotal: (state) => {
      return Object.values(state.items).reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0);
    }

  },
  reducers: {
    addItem(state, action) {
      const {id, name, price} = action.payload
      if (state.items[id]) {
        if (state.items[id].quantity < 5) {
          state.items[id].quantity += 1
        }
      } else {
        state.items[id] = {name, price, quantity: 1}
      }
    },
    decreaseItem(state, action) {
      const id = action.payload.id
      if (state.items[id]) {
        if (state.items[id].quantity > 1) {
          state.items[id].quantity -= 1
        } else {
          delete state.items[id]
        }
      }
    },
    removeItem(state, action) {
      delete state.items[action.payload]
    },
    clearCart(state) {
      state.items = {}
    },
  }
})
export const { selectCartItems, selectCartTotal, selectMenuQuantityInCartById } = cartSlice.selectors;
export const { addItem, decreaseItem, removeItem, clearCart } = cartSlice.actions;
