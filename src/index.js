import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";

import App from "./components/App";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.NODE_ENV
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
