import { questionConstants } from "../constants";
import initialState from "./initialState";

export default function(state = initialState.questions, action) {

  switch (action.type) {
    case questionConstants.GET:
      console.log("question get reducer", action);
      return action.response.data;
    case questionConstants.SUBMIT:
      return state;
    case questionConstants.CREATE:
      return state;
    default:
      return state;
  }
}
