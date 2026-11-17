import { createSlice } from '@reduxjs/toolkit'

// Срез корзины (логика как в ЛР5/ЛР6)
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    count: 0,
    message: 'Выберите курс и добавьте его в корзину.',
  },
  reducers: {
    addToCart(state, action) {
      state.count += action.payload
      state.message = `Добавлено в корзину: ${action.payload}`
    },
    buyNow(state, action) {
      state.message = `Оформление заказа: ${action.payload} шт.`
    },
    clearCart(state) {
      state.count = 0
      state.message = 'Корзина очищена'
    },
  },
})

export const { addToCart, buyNow, clearCart } = cartSlice.actions
export default cartSlice.reducer
