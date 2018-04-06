import initialState from "./initialState";
import * as types from "../constants/actionTypes";

// Handles user related actions
export default function(state = initialState, action) {
  switch (action.type) {
    case types.REGISTER_USER:
      console.log("action", action);
      return state;
    case types.REGISTER_USER_SUCCESS:
      console.log("REGISTER_USER_SUCCESS action", action);
      return { ...state, notice: action.response.data };
    case types.REGISTER_USER_ERROR:
      console.log("REGISTER_USER_ERROR action", action);
      return {...state, error: action.error.response.data}
    case types.LOGIN_USER:
      return { ...state, currentUser: action };
    default:
      return state;
  }
}
