// api.js
import axios from 'axios';

const API_BASE_URL = 'https://dev-api-nanny.virtualittechnology.com/v1/common/signUp';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const signup = (payload) => api.post('/signupUser', payload);

export default api;
