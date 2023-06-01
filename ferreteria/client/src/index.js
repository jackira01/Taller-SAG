import "./assets/main.css";
import "./assets/tailwind.css";
import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/Index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}><App /></Provider>
);
