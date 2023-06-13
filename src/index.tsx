import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { LoginContextProvider } from "./context/loginContext";
import { GlobalContextProvider } from "./context/globalContext";

ReactDOM.render(
  <Router>
    <GlobalContextProvider>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </GlobalContextProvider>
  </Router>,
  document.getElementById("root")
);
