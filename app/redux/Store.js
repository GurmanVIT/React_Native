// src/redux/store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    }
});

export default store;
