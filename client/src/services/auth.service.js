import { userHeader } from "../helpers";
import axios from 'axios';

export const authService = {
  register,
  login,
  logout
}

const req = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    ...userHeader(),
    "Content-Type": "application/json"
  }
});

function register(user) {
  return req
  .post(`api/v1/users`, user)
  .then((response) => {
    return response;
  })

}

function login(username, password) {
  return req
  .post(`api/v1/login`, {username, password}).then(response => {
    return response;
  });
}

function logout() {
  return req
  .delete(`api/v1/logout`)
  .then((response) => {
    return response;
  })
}