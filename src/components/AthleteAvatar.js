import React from "react";
import Avatar from "@material-ui/core/Avatar";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  small: {
    width: 20,
    height: 20,
    margin: "2px"
  }
});

const AthleteAvatar = ({ name, img, size, classes }) => {
  return img ? (
    <Avatar alt={name} src={img} className={size ? classes[size] : ""} />
  ) : (
    <Avatar alt={name} className={size ? classes[size] : ""}>
      <PermIdentityIcon />
    </Avatar>
  );
};

export default withStyles(styles)(AthleteAvatar);
