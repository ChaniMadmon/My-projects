import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllProducts = createAsyncThunk("get-allProducts", async () => {
    let { data } = await axios.get("http://localhost:4000/waterSport")
    console.log(data)
    return data
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        listProducts: []
    },
  

extraReducers:(builder)=>{
    builder.addCase(getAllProducts.fulfilled,(state, action)=>{
      state.listProducts=action.payload  
    }).addCase(getAllProducts.rejected, (state, action)=>{
        state.status="failed!!"
    }).addCase(getAllProducts.pending, (state, action)=>{
        state.status="loading..."
    })
}
});




export default productSlice.reducer