import { createStore, combineReducers, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware, push } from "react-router-redux";
import rootReducer from "./reducers";


const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

export default store;