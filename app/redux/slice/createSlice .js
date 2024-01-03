// signupSlice.js
import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        // Your initial state here
    },
    reducers: {
        signupUser: (state, action) => {
            // Your signup logic here
        },
    },
});

export const { signupUser } = signupSlice.actions;
export default signupSlice.reducer;
