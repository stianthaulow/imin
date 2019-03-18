import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import AthleteAvatar from "./AthleteAvatar";
import LogoutButton from "../LogutButton";

const TopBar = props => {
  const { user, logoutHandler } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <AthleteAvatar {...user} />
        <div style={{ flexGrow: 1 }} />
        <LogoutButton logoutHandler={logoutHandler} />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
