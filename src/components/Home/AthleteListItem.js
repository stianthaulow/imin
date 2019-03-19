import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import AthleteAvatar from "./AthleteAvatar";

import red from "@material-ui/core/colors/red";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  notAttending: {
    textDecoration: "line-through",
    color: red[700]
  }
});

const AthleteListItem = props => {
  const { name, attending, classes } = props;
  return (
    <ListItem>
      <ListItemAvatar>
        <AthleteAvatar {...props} />
      </ListItemAvatar>
      <ListItemText
        classes={attending ? {} : { primary: classes.notAttending }}
      >
        {name}
      </ListItemText>
    </ListItem>
  );
};

export default withStyles(styles)(AthleteListItem);
