import { configureStore } from '@reduxjs/toolkit';
import { deleteAllSlice } from './deleteAllTodosSlice/deleteAllTodosSlice';





export const store = configureStore({
    reducer: {
        deleteTodos: deleteAllSlice.reducer,
    },
   
})