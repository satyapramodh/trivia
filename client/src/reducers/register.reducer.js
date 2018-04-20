import { userConstants } from "../constants";
import initialState from './initialState';

export function registration(state = initialState.alert, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      console.log("reg req action", action);
      console.log("updated state is ", { ...state, registering: true, alert: { message: `${action.user.name} success` } });

      return { ...state, registering: true, alert: { message: `${action.user.name} success` } };
    case userConstants.REGISTER_SUCCESS:
      console.log("reg success action", action);
      return state;
    case userConstants.REGISTER_FAILURE:
      console.log("reg fail action", action);
      return state;
    default:
      return state;
  }
}
