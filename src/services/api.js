import axios from 'axios';

export const api = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use((config) => {
	const userData = localStorage.getItem('burger-house:userData');

	const token = userData && JSON.parse(userData).data.token;

	config.headers.authorization = `Bearer ${token}`;

	return config;
});


