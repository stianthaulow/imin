import React from "react";
import Avatar from "@material-ui/core/Avatar";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

const AthleteAvatar = props => {
  const { name, img } = props;
  return img ? (
    <Avatar alt={name} src={img} />
  ) : (
    <Avatar alt={name}>
      <PermIdentityIcon />
    </Avatar>
  );
};

export default AthleteAvatar;
