import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../reducers";
import rootSaga from "../sagas";


export const history = createHistory();
const routerReducer = routerMiddleware(history);

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(
      combineReducers({
        ...rootReducer,
        router: routerReducer
      }),
      applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};


// export const store = createStore(rootReducer);