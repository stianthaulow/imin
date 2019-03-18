import React from "react";
import Avatar from "@material-ui/core/Avatar";

const AthleteAvatar = props => {
  const { name, img } = props;
  return <Avatar alt={name} src={img} />;
};

export default AthleteAvatar;
