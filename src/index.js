import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {console.log("store is", store)}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
