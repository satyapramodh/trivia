import { userConstants } from "../constants";
import initialState from "./initialState";

let user = JSON.parse(localStorage.getItem("user"));

export function authentication(state = initialState, action) {
  state = user ? { ...state, loggedIn: true, user } : state;

  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      console.log("login req action", action);
      return {
        loggingIn: true
      };
    case userConstants.LOGIN_SUCCESS:
      console.log("login success action", action);
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
      console.log("login logout action", action);
      localStorage.clear();
      return {...state, user: {}};
    default:
      return state;
  }
}
