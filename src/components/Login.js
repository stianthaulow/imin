import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    marginTop: theme.spacing.unit * 12,
    textAlign: "center",
    padding: theme.spacing.unit * 2
  },
  googleButton: {
    background: "#DB4437",
    color: "#fff",
    margin: ".5em"
  },
  facebookButton: {
    background: "#3b5998",
    color: "#fff",
    margin: ".5em"
  }
});

export default withStyles(styles)(function Login(props) {
  const { loginWithFacebookHandler, loginWithGoogleHandler, classes } = props;
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <Typography variant="h5">Logg inn</Typography>
        <Button
          variant="contained"
          onClick={loginWithFacebookHandler}
          className={classes.facebookButton}
        >
          Logg inn med facebook
        </Button>
        <br />
        <Button
          variant="contained"
          onClick={loginWithGoogleHandler}
          className={classes.googleButton}
        >
          Logg inn med google
        </Button>
      </Card>
    </div>
  );
});
