import React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  container: {
    textAlign: "center"
  },
  message: {
    marginTop: theme.spacing.unit * 5
  }
});

export default withStyles(styles)(function Register(props) {
  const { user, classes } = props;
  return (
    <div className={classes.container}>
      <Typography className={classes.message}>
        Hei, {user.name}, spør Stian om han kan registrere deg først...
      </Typography>
    </div>
  );
});
