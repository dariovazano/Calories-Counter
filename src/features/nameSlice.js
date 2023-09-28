import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    nameSelected: "dario",

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