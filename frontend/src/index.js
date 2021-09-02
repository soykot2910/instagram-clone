import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App";
import { InstagramProvider } from "./context/Context";

ReactDOM.render(
  <InstagramProvider>
    <App />
  </InstagramProvider>,
  document.getElementById("root")
);
