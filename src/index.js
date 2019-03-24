import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";

import App from "./components/App";

Sentry.init({
  dsn: "https://c8cfde08880e4905bd25b36678c57364@sentry.io/1419100",
  environment: "development"
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
