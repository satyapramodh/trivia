import { combineReducers } from 'redux';

import alert from "./alert.reducer";
import registration from "./register.reducer";
import user from "./login.reducer";
import questions from "./question.reducer";

const rootReducer = combineReducers({
  alert,
  registration,
  user,
  questions
});

export default rootReducer;