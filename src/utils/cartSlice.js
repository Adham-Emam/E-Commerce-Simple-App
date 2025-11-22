import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart(state, action) {
      const item = action.payload
      const exists = state.items.find((p) => p.id === item.id)

      if (exists) {
        exists.qty += 1
      } else {
        state.items.push({ ...item, qty: 1 })
      }
    },

    removeFromCart(state, action) {
      state.items = state.items.filter((p) => p.id !== action.payload)
    },

    increaseQty(state, action) {
      const item = state.items.find((p) => p.id === action.payload)
      if (item) item.qty += 1
    },

    decreaseQty(state, action) {
      const item = state.items.find((p) => p.id === action.payload)
      if (item && item.qty > 1) item.qty -= 1
    },

    clearCart(state) {
      state.items = []
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
