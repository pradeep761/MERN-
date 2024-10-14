import axios from 'axios';

// Set the base URL for the API
const API_URL = 'http://localhost:5000/api/auth'; // Adjust the port if necessary

// Register a new user
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Log in a user
export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};
