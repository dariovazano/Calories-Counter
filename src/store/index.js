import { configureStore } from '@reduxjs/toolkit'


import nameSlice from '../features/nameSlice'

export const store = configureStore({
    reducer: {
        Name: nameSlice,
    },

})

