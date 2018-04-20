import { userConstants } from "../constants";

const register = (user) => {
  console.log("user action", user);

  return { type: userConstants.REGISTER_REQUEST, user };
};

const login = (username, password) => ({
  type: userConstants.LOGIN_REQUEST,
  username,
  password
});

const logout = () => ({
  type: userConstants.LOGOUT,
});

export const userActions = {
  register,
  login,
  logout
};