import { createSlice } from '@reduxjs/toolkit'
const submitSlice = createSlice({
    name: 'submit',
    initialState: {
        submitList:[]
    },
    reducers:{
        addSubmit : (state, action) => {
            state.submitList = state.submitList.concat(action.payload)
        }
    }
})

export const {addSubmit} = submitSlice.actions
export default submitSlice.reducer