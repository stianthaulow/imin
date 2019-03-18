import React from "react";

import Button from "@material-ui/core/Button";

const LogOutButton = props => {
  const { logoutHandler } = props;
  return (
    <Button variant="contained" onClick={logoutHandler} color="primary">
      Logg ut
    </Button>
  );
};

export default LogOutButton;
