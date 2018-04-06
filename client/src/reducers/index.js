import { combineReducers } from "redux";
import user from "./userReducer";
import questions from "./questionReducer";

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  user,
  questions
});

export default rootReducer;
