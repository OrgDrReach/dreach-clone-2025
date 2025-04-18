import axios from 'axios';

const api = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle token refresh or logout
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          const response = await api.post('/auth/refresh', null, {
            headers: { Authorization: `Bearer ${refreshToken}` },
          });
          localStorage.setItem('token', response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);

          // Retry the original request
          const config = error.config;
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          return api(config);
        } catch (refreshError) {
          // Refresh token is invalid, logout user
          localStorage.clear();
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error);
  },
);

export default api;