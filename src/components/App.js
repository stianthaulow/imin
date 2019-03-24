import React from "react";
import { Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

import useAuth from "../hooks/useAuth";

import Layout from "./Layout";
import Home from "./Home";
import Stats from "./Stats";
import Poll from "./Poll";
import Register from "./Register";
import Login from "./Login";
import Loading from "./Loading";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red
  },
  typography: {
    useNextVariants: true
  }
});

export default function App() {
  const { isLoading, user, loginHandlers, logoutHandler } = useAuth();
  return isLoading ? (
    <Loading />
  ) : (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {!user ? (
        <Login {...loginHandlers} />
      ) : user.isKnown ? (
        <Switch>
          <Layout
            exact
            path="/"
            component={Home}
            user={user}
            logoutHandler={logoutHandler}
          />
          <Layout
            path="/stats"
            component={Stats}
            user={user}
            logoutHandler={logoutHandler}
          />{" "}
          <Layout
            path="/poll"
            component={Poll}
            user={user}
            logoutHandler={logoutHandler}
          />
        </Switch>
      ) : (
        <Register user={user} logoutHandler={logoutHandler} />
      )}
    </MuiThemeProvider>
  );
}
