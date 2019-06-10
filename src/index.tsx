import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import "./scss/overrides.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./main/App";

// Render the app.
ReactDOM.render(<App/>, document.getElementById("root"));
