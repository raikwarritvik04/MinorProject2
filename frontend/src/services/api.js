import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Adjust if your backend runs on a different host/port
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
