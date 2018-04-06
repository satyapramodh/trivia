import initialState from "./initialState";
import * as types from "../constants/actionTypes";

// Handles image related actions
export default function(state = initialState.currentUser, action) {
  switch (action.type) {
    case types.REGISTER_USER:
      return state;
    case types.LOGIN_USER:
      return { ...state, currentUser: action };
    default:
      return state;
  }
}
