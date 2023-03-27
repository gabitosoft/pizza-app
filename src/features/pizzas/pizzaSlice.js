import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
  id: 1,
  name: 'Especial',
  description: 'Conjunto de sabores para 20 personas'
}, {
  id: 2,
  name: 'Familiar',
  description: 'Para 10 personas'
}]

export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    addPizza: (state, action) => {
      state.push(action.payload)
    }, 
    deletePizza: (state, action) => {
      const foundPizza = state.find(p => p.id === action.payload.id)
      if (foundPizza) {
        state.splice(foundPizza, 1)
      }
    }
  }
})

export const { addPizza, deletePizza } = pizzaSlice.actions

export default pizzaSlice.reducer
