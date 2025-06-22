
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add JWT token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export const apiService = {
  // Auth
  login: async (credentials: { phone: string; password: string }) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  register: async (userData: { name: string; phone: string; password: string }) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  // Categories
  getCategories: async () => {
    const response = await api.get('/category/allCategories');
    return response.data;
  },

  getSubcategories: async (categoryId: string) => {
    const response = await api.get(`/subcategory/categories/${categoryId}/subcategories`);
    return response.data;
  },

  // Prompts
  submitPrompt: async (data: { categoryId: string; subCategoryId: string; prompt: string }) => {
    const response = await api.post('/prompt', data);
    return response.data;
  },

  getUserHistory: async () => {
    const response = await api.get('/user/history');
    return response.data;
  },
  // Admin
  getAllUsers: async () => {
    const response = await api.get('/admin/users');
    return response.data;
  },
  getAllUsersWithHistory: async () => {
    const response = await api.get('/admin/users-with-history');
    return response.data;
  },

  getUserHistoryByID: async (userId: string) => {
    const response = await api.get(`/admin/users/${userId}/history`);
    return response.data;
  },
  addCategory: async (name: string) => {
    const response = await api.post('/category/addCategory', { name });
    return response.data;
  },

  addSubcategory: async (categoryId: string, name: string) => {
    const response = await api.post(`/subCategory/categories/${categoryId}/subcategories`, { name });
    return response.data;
  },
};
