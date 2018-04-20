import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./helpers";
import { App } from "./containers";
import "./styles/index.css";

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);