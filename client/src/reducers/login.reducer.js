import { userConstants } from "../constants";
import initialState from "./initialState";

export default function (state = initialState.user, action) {
  let user = JSON.parse(localStorage.getItem("user"));
  state = user ? { ...state, loggedIn: true, ...user } : state;

  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true
      };
    case userConstants.LOGOUT:
      return { loggedIn: false };
    case userConstants.GET_CURRENT_USER:
      return { user };
    default:
      return state;
  }
}
