import { userConstants } from "../constants";
import initialState from "./initialState";

let user = JSON.parse(localStorage.getItem("user"));

export function authentication(state = initialState.alert, action) {
  state = user ? { ...state, loggedIn: true, user } : state;
  console.log("login action", action);

  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        // user: action.username
      };
    case userConstants.LOGIN_SUCCESS:
      const user = action.response.data;
      localStorage.setItem("user", JSON.stringify(user));
      return {
        loggedIn: true,
        user
      };
    case userConstants.LOGIN_FAILURE:
      console.log("login fail action", action.error.response.data);
      return { ...state, alert: { message: action.error.response.data.errors[0].detail } };
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
