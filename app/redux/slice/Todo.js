import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch("https://reqres.in/api/users?page=2");
    // console.log("Response ===> ", response.body)
    return response.json();
})

const todoSlice = createSlice({
    name: 'todo',

    initialState: {
        isLoading: false,
        data: null,
    },

    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;

            console.log(state.data)
        });

        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log('Error', action.payload);
            state.isError = true;
        })
    },
});

export default todoSlice.reducer;