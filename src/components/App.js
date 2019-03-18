import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

import useAuth from "../hooks/useAuth";

import Home from "./Home";
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
        <Home user={user} logoutHandler={logoutHandler} />
      ) : (
        <Register user={user} logoutHandler={logoutHandler} />
      )}
    </MuiThemeProvider>
  );
}
