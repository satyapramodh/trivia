import { userHeader } from "../helpers";

export const authService = {
  register,
  login,
  logout
}

const API_URL = "http://localhost:3001";
const req = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    Authorization: basicAuth(),
    "Content-Type": "application/json"
  }
});

function register(user) {
  req
  .post(`${API_URL}/api/v1/users`, user)
  .then((response) => {
    console.log("Register response", response);
    return response;
  })

}

function login(username, password) {
  req
  .post(`${API_URL}/api/v1/login`, {username, password}).then(response => {
    console.log("Login response", response);
    return response;
  });
}

function logout() {
  req
  .delete(`${API_URL}/api/v1/logout`)
  .then((response) => {
    console.log("Logout response", response);
    return response;
  })
}