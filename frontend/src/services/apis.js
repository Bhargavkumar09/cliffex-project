import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:5000/api";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(error.response.data.message);
  }
);

export const loginUser = async (email, password) => {
  const { data } = await axios.post(`${BASE_URL}/auth/signin`, {
    email,
    password,
  });
  return data;
};

export const registerUser = async (name, email, password, confirmPassword) => {
  const { data } = await axios.post(`${BASE_URL}/auth/signup`, {
    name,
    email,
    password,
    confirmPassword,
  });
  return data;
};

export const getAllUsers = async (token) => {
  const { data } = await axios.get(`${BASE_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
