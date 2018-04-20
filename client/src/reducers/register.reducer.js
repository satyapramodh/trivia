import { userConstants } from "../constants";
import initialState from './initialState';

export function registration(state = initialState.alert, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { ...state, registering: true };
    case userConstants.REGISTER_SUCCESS:
      console.log("reg success action", action.response.data);
      return { ...state, alert: { message: action.response.data.username + ' created' } };
    case userConstants.REGISTER_FAILURE:
      console.log("reg fail action", action.error.response.data);
      return { ...state, alert: { message: action.error.response.data.errors[0].title } };
    default:
      return state;
  }
}
