import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Add request interceptor to add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Register a new user
export const register = async (userData) => {
  try {
    console.log('Sending registration request:', { ...userData, password: '[REDACTED]' });
    const response = await api.post('/register', userData);
    console.log('Registration response:', response.data);
    
    if (!response.data || !response.data.token || !response.data.user) {
      throw new Error('Invalid response format from server');
    }
    
    return {
      token: response.data.token,
      user: response.data.user
    };
  } catch (error) {
    console.error('Registration error:', error);
    if (error.response) {
      throw error.response.data;
    }
    throw { message: error.message || 'Network error occurred' };
  }
};

// Login user
export const login = async (credentials) => {
  try {
    console.log('Sending login request:', { ...credentials, password: '[REDACTED]' });
    const response = await api.post('/login', credentials);
    console.log('Login response:', response.data);
    
    if (!response.data || !response.data.token || !response.data.user) {
      throw new Error('Invalid response format from server');
    }
    
    return {
      token: response.data.token,
      user: response.data.user
    };
  } catch (error) {
    console.error('Login error:', error);
    if (error.response) {
      throw error.response.data;
    }
    throw { message: error.message || 'Network error occurred' };
  }
};

// Verify OTP
export const verifyOTP = async (otpData) => {
  try {
    const response = await api.post('/verify', otpData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get current user
export const getCurrentUser = async () => {
  try {
    const response = await api.get('/user');
    return response.data;
  } catch (error) {
    console.error('Get current user error:', error);
    if (error.response) {
      throw error.response.data;
    }
    throw { message: error.message || 'Network error occurred' };
  }
};

// Logout
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}; 