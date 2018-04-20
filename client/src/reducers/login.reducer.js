import { userConstants } from "../constants";
import initialState from "./initialState";

let user = JSON.parse(localStorage.getItem("user"));

export function authentication(state = initialState.alert, action) {
  state = user ? { ...state, loggedIn: true, user } : state;
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.username
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
