import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newCategorie: null,
    newName: null,
    newImage: null,
}

export const newProductSlice = createSlice({
    name: 'newProduct',
    initialState,
    reducers: {
        setNewName: (state, action) => {
            //console.log(action.payload.data.email)
            state.newName = action.payload
        },

    },
})

export const { setNewName } = newProductSlice.actions

export default newProductSlice.reducer
