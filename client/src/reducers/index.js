import { combineReducers } from 'redux';

import { alertMessage } from "./alert.reducer";
import { registration } from './register.reducer';
import { authentication } from './login.reducer';

const rootReducer = combineReducers({
  alertMessage,
  registration,
  authentication
});

export default rootReducer;