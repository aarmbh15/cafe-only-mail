import axios from 'axios';

// Create a custom axios instance
const instance = axios.create({
  baseURL: 'http://localhost:8000/api',  // Your Laravel API base URL
  withCredentials: true,                 // Required for Sanctum to send cookies
});

// Add common headers
instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
instance.defaults.headers.common['Accept'] = 'application/json';
instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.withXSRFToken = true;

// Optional: Add a response interceptor to handle 401 (unauthorized) globally
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Optionally redirect to login or clear user
      // window.location.href = '/login';
      console.error('Login failed axios');
    }
    return Promise.reject(error);
  }
);

// Export the configured instance as default
export default instance;