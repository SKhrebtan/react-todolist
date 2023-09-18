import { createSlice } from '@reduxjs/toolkit';

export const deleteAllSlice = createSlice({
    name: "deleteTodos",
    initialState: {
        status: false,
    },
    reducers: {
        checkAll(state) {
           state.status = !state.status;
        }
    }
}
)

export const { checkAll } = deleteAllSlice.actions;