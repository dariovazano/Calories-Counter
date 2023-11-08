import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    actualizar: null,
}


export const actuSlice = createSlice({
    name: 'actu',
    initialState,
    reducers: {
        setActualzar: (state, action) => {

            return {
                actualizar: new date()

            }
        },


    },
})

export const { setActualizar } = actuSlice.actions

export default actuSlice.reducer
