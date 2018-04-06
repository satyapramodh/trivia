import React from "react";
import {render} from "react-dom";
import Router from "./Router";
import "./styles/index.css";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();