import React, { useState, useRef, useContext, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

import UserContext from "../../context/UserContext";

import NameSuggestion from "./NameSuggestion";

import { db } from "../../firebase";

const namePollRef = db.collection("namepoll");

const styles = theme => ({
  fab: {
    margin: 2 * theme.spacing.unit
  }
});

const getNames = names =>
  Object.keys(names)
    .map(key => ({ ...names[key], name: key }))
    .sort((a, b) => b.votes - a.votes);

const Poll = ({ classes }) => {
  const user = useContext(UserContext);
  const [names, setNames] = useState({});
  let nameRef = useRef();

  useEffect(() => {
    return namePollRef.doc("suggestions").onSnapshot(snap => {
      if (!snap.exists) setNames([]);
      else setNames(snap.data());
    });
  }, []);

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
      namePollRef.doc("suggestions").set(newNames);
    }

    nameRef.current.value = "";
  };

  const vote = name => () => {
    const voted = { ...names };
    if (!names[name].voters[user.id]) {
      voted[name].votes++;
      voted[name].voters[user.id] = { name: user.name, img: user.img };
    } else {
      voted[name].votes--;
      delete voted[name].voters[user.id];
    }
    namePollRef.doc("suggestions").set(voted);
  };

  return (
    <div style={{ marginTop: "1em", textAlign: "center" }}>
      <Typography variant="h5">Stem på et lagnavn:</Typography>
      <List>
        {getNames(names).map(suggestion => (
          <NameSuggestion {...suggestion} voteHandler={vote(suggestion.name)} />
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
