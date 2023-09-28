import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    nameSelected: "Usuario???",

}

export const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        setNameSelected: (state, action) => {
            state.nameSelected = action.payload
        },
    },
})

export const { setNameSelected } = nameSlice.actions

export default nameSlice.reducer