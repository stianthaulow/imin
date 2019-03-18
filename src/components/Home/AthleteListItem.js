import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import AthleteAvatar from "./AthleteAvatar";

const AthleteListItem = props => {
  const { name } = props;
  return (
    <ListItem>
      <ListItemAvatar>
        <AthleteAvatar {...props} />
      </ListItemAvatar>
      <ListItemText> {name} </ListItemText>
    </ListItem>
  );
};

export default AthleteListItem;
