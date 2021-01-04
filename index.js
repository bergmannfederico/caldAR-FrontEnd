import React from "react";
import ReactDOM from "react-dom";
import { composeWithDevTools } from "redux-devtools-extension/index";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./Routes";
import "./index.css";

const configureStore = () => {
  const enhancer = composeWithDevTools();
  return createStore(rootReducer, enhancer);
};

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
