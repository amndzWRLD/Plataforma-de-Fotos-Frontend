import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const loginUser = async (credentials) => {
  const res = await axios.post(`${API_URL}/login`, credentials);
  return res.data;
};

export const registerUser = async (data) => {
  const res = await axios.post(`${API_URL}/register`, data);
  return res.data;
};
