import React from "react";
import { Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

import UserContext from "../context/UserContext";

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
        <UserContext.Provider value={user}>
          <Switch>
            <Layout
              exact
              path="/"
              component={Home}
              logoutHandler={logoutHandler}
            />
            <Layout
              path="/stats"
              component={Stats}
              logoutHandler={logoutHandler}
            />{" "}
            <Layout
              path="/poll"
              component={Poll}
              logoutHandler={logoutHandler}
            />
          </Switch>
        </UserContext.Provider>
      ) : (
        <Register user={user} logoutHandler={logoutHandler} />
      )}
    </MuiThemeProvider>
  );
}
