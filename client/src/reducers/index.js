import { combineReducers } from 'redux';

import alert from "./alert.reducer";
import registration from "./register.reducer";
import user from "./login.reducer";

const rootReducer = combineReducers({
  alert,
  registration,
  user
});

export default rootReducer;