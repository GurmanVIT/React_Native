// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
    try {
        const response = await axios.post('https://dev-api-nanny.virtualittechnology.com/v1/common/login', credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const authSlice = createSlice({
    name: 'auth',

    initialState: {
        isLoading: false,
        data: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                console.log(state.data);
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log('Error', action.payload);
                state.isError = true;
            });
    },
});

export default authSlice.reducer;
