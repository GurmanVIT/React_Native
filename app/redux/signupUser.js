// store.js
import { configureStore } from '@reduxjs/toolkit';
import signupReducer from '../path-to-slice/signupSlice';

const store = configureStore({
    reducer: {
        signup: signupReducer,
        // ... other reducers
    },
});

export default store;
