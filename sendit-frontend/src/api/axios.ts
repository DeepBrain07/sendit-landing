import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // CRITICAL: Sends the cookie automatically
});

// Interceptor to handle CSRF tokens from cookies
api.interceptors.request.use((config) => {
  // 1. Handle CSRF
  const csrfToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('csrftoken='))
    ?.split('=')[1];
  
  if (csrfToken && config.method !== 'get') {
    config.headers['X-CSRFToken'] = csrfToken;
  }

  // 2. Handle Authorization Header
  try {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const userData = JSON.parse(userStr);
      // Ensure this path matches your actual login response structure
      const token = userData?.token?.access_token || userData?.access_token; 
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  } catch (err) {
    console.error("Error parsing user from localStorage", err);
  }

  return config;
});

// NEW: Response Interceptor to handle 401 Unauthorized errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // 1. Clear local storage to prevent the app from thinking the user is still logged in
      localStorage.removeItem('user');

      // 2. Redirect to login page
      // Using window.location.href because we are outside of the React Router context
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;