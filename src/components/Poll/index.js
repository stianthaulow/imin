import React, { useState, useRef, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";

import UserContext from "../../context/UserContext";

import AthleteAvatar from "../AthleteAvatar";

const styles = theme => ({
  fab: {
    margin: 2 * theme.spacing.unit
  }
});

const testNames = {
  "Forslag 1": {
    votes: 2,
    voters: {
      stian: {
        name: "Stian",
        img: ""
      },
      sindre: {
        name: "Sindre",
        img: ""
      }
    }
  },
  "Forslag 2": {
    votes: 1,
    voters: {
      sindre: {
        name: "Sindre",
        img: ""
      }
    }
  }
};

const getNames = names =>
  Object.keys(names)
    .map(key => ({ ...names[key], name: key }))
    .sort((a, b) => b.votes - a.votes);

const getVoters = voters => Object.values(voters);

const Poll = props => {
  const { classes } = props;

  const user = useContext(UserContext);

  const [names, setNames] = useState(testNames);

  let nameRef = useRef();

  const addName = () => {
    const name = nameRef.current.value;

    if (name.length && !names[name]) {
      let newNames = { ...names };
      let voters = {};
      voters[user.id] = { name: user.name, img: user.img };
      newNames[name] = {
        votes: 1,
        voters
      };
      setNames(newNames);
    }

    nameRef.current.value = "";
  };

  const vote = name => () => {
    const voted = { ...names };
    voted[name].votes++;
    setNames(voted);
  };

  return (
    <div style={{ marginTop: "1em", textAlign: "center" }}>
      <Typography variant="h5">Stem på et lagnavn:</Typography>
      <List>
        {getNames(names).map(({ name, votes, voters }) => (
          <ListItem key={name}>
            <ListItemText primary={name} secondary={votes} />
            {getVoters(voters).map(voter => (
              <AthleteAvatar {...voter} key={voter.name} size="small" />
            ))}
            <IconButton color="primary" onClick={vote(name)}>
              <ThumbUpIcon />
            </IconButton>
          </ListItem>
        ))}
        <Divider />
        <TextField
          label="Foreslå et lagnavn"
          margin="normal"
          variant="outlined"
          inputRef={nameRef}
        />
        <Fab color="primary" className={classes.fab} onClick={addName}>
          <AddIcon />
        </Fab>
      </List>
    </div>
  );
};

export default withStyles(styles)(Poll);
