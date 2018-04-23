import { userConstants } from "../constants";
import initialState from "./initialState";

export default function (state = initialState.user, action) {
  let user = JSON.parse(localStorage.getItem("user"));
  state = user ? { ...state, loggedIn: true, ...user } : state;

  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      console.log("login req action", action);
      return {
        loggingIn: true
      };
    case userConstants.LOGIN_SUCCESS:
      console.log("login success action", action);
      return {
        ...state,
        loggedIn: true
      };
    case userConstants.LOGIN_FAILURE:
      console.log("login fail action", action.error.response.data);
      return { ...state, alert: { message: action.error.response.data.errors[0].detail } };
    case userConstants.LOGOUT:
      console.log("logout action", action);
      return { loggedIn: false };
    case userConstants.GET_CURRENT_USER:
      console.log("get current user action", action, user);
      return { user };
    default:
      return state;
  }
}
