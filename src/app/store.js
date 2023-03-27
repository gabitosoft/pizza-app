import { configureStore } from '@reduxjs/toolkit'
import pizzasReducer from './../features/pizzas/pizzaSlice'

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer
  }
})
