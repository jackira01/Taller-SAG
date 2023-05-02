import "./assets/main.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
const { REACT_APP_CLIENT_ID_AUTH0, REACT_APP_DOMAIN_AUTH0 } = process.env;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
