import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
    //   console.log(state.value);
    //   console.log(action.payload);
    //   state.value =  action.payload
         const findIndex = state.value.findIndex((product) => product.id == action.payload.id)
         if(findIndex >= 0){
            state.value[findIndex].quantity +=1
         }else{
            state.value.push({...action.payload, quantity:1})
         }
         localStorage.setItem("cartDetails", JSON.stringify(state.value))
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer