import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../reducers";
import rootSaga from "../sagas";


export const history = createHistory();
const routing = routerMiddleware(history);

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware, routing)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};


// export const store = createStore(rootReducer);