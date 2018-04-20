import { userConstants } from "../constants";

export const userActions = {
  register,
  login,
  logout
};

const register = (user) => ({
  type: userConstants.REGISTER_REQUEST,
  user
});

const login = (username, password) => ({
  type: userConstants.LOGIN_REQUEST,
  username,
  password
});

const logout = () => ({
  type: userConstants.LOGOUT,
});
