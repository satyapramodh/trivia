import { userHeader } from "../helpers";
import axios from 'axios';

export const authService = {
  register,
  login,
  logout
}

const API_URL = process.env.API_URL || "http://localhost:3001";
const req = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    ...userHeader,
    "Content-Type": "application/json"
  }
});

function register(user) {
  return req
  .post(`${API_URL}/api/v1/users`, user)
  .then((response) => {
    console.log("Register response", response);
    return response;
  })

}

function login(username, password) {
  return req
  .post(`${API_URL}/api/v1/login`, {username, password}).then(response => {
    console.log("Login response", response);
    return response;
  });
}

function logout() {
  return req
  .delete(`${API_URL}/api/v1/logout`)
  .then((response) => {
    console.log("Logout response", response);
    return response;
  })
}