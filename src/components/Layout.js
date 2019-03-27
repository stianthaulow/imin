import React from "react";
import { Route } from "react-router-dom";

import TopBar from "./TopBar";

export default function Layout({
  component: Component,
  logoutHandler,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={mathcProps => (
        <div>
          <TopBar logoutHandler={logoutHandler} />
          <Component {...mathcProps} />
        </div>
      )}
    />
  );
}
