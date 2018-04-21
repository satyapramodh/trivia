import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

import rootReducer from "../reducers";
import rootSaga from "../sagas";


export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(
  routerMiddleware(history),
  sagaMiddleware
)

export const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);