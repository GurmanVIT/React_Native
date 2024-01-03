import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchss = createAsyncThunk("fetchss", async () => {
    const result = await fetch("https://reqres.in/api/users?page=2");
    return result.json();
})

const todoSlice = createSlice({
    name: 'todotodo',

    initialState: {
        isLoading: false,
        data: null,
    },

    extraReducers: (builder) => {
        builder.addCase(fetchss.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchss.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            console.log(state.data);
        });
        builder.addCase(fetchss.rejected, (state, action) => {
            console.log('Error', action.payload);
            state.isError = true;
        })
    },
});

export default todoSlice.reducer;