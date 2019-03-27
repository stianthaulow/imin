import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/HowToReg";
import BarChartIcon from "@material-ui/icons/BarChart";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import LogoutButton from "./LogutButton";

const MenuList = ({ closeDrawer }) => (
  <div style={{ width: 250 }}>
    <List>
      <ListItem button component={Link} to="/" onClick={closeDrawer}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Hjem" />
      </ListItem>
      <ListItem button component={Link} to="/poll" onClick={closeDrawer}>
        <ListItemIcon>
          <ThumbsUpDownIcon />
        </ListItemIcon>
        <ListItemText primary="Navneavstemning" />
      </ListItem>
      <ListItem button component={Link} to="/stats" onClick={closeDrawer}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Stats" />
      </ListItem>
    </List>
  </div>
);

const TopBar = props => {
  const { logoutHandler } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = shouldOpen => () => {
    setIsDrawerOpen(shouldOpen);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <LogoutButton logoutHandler={logoutHandler} />
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={isDrawerOpen}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        <MenuList closeDrawer={toggleDrawer(false)} />
      </SwipeableDrawer>
    </>
  );
};

export default TopBar;
