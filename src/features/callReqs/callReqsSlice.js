import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    callReqs: []
}

export const getCallReqs = createAsyncThunk('reqs/get', async(_, thunkAPI)=>{
    try {
        const res = await fetch('http://localhost:4000/callReqs')
        const data = await res.json()
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    } 
})
export const postCallReqs = createAsyncThunk('reqs/post', async({text, text_number, email}, thunkAPI)=>{
    try {
        const res = await fetch('http://localhost:4000/callReqs',{
            method: "POST",
            headers: {"Content-Type": "application/json"},   
            body: JSON.stringify({userName: text, phoneNumber: text_number, email})
        })
        return res.json()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
export const delCallReqs = createAsyncThunk('reqs/delete', async(id, thunkAPI)=>{
    try{
        await fetch(`http://localhost:4000/callReqs/${id}`,{
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
        })
        return id
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const callReqSlice = createSlice({
    name: 'callReqs',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
               .addCase(postCallReqs.fulfilled, (state, action)=>{
                    state.callReqs.push(action.payload)
               })
               .addCase(getCallReqs.fulfilled, (state, action)=>{
                    state.callReqs = action.payload
               })
               .addCase(delCallReqs.fulfilled, (state, action)=>{
                    state.callReqs = state.callReqs.filter((id)=>id._id !== action.payload)
               })
    }
})
export default callReqSlice.reducer