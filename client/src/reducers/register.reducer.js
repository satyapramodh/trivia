import { userConstants } from "../constants";
import initialState from './initialState';

export default function (state = initialState.user, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { ...state, registering: true };
    default:
      return state;
  }
}
