import React from "react";
import Avatar from "@material-ui/core/Avatar";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

const style = {
  width: 25,
  height: 25,
  marginLeft: -12
};

const VoterAvatar = ({ name, img }) => {
  return img ? (
    <Avatar alt={name} src={img} style={style} />
  ) : (
    <Avatar alt={name} style={style}>
      <PermIdentityIcon />
    </Avatar>
  );
};

export default VoterAvatar;
