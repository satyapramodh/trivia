import initialState from "./initialState";
import * as types from "../constants/actionTypes";

// Handles image related actions
export default function(state = initialState.questions, action) {
  switch (action.type) {
    case types.ADD_RADIO_QUESTION:
      return state;
    case types.ADD_TEXT_QUESTION:
      return state;
    case types.GET_QUESTIONS:
      return { ...state, questions: action };
    case types.NEXT_QUESTION:
      return state;
    case types.SOLVE_QUESTION:
      return state;
    default:
      return state;
  }
}