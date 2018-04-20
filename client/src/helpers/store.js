import { createStore } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../reducers";


export const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(rootReducer);