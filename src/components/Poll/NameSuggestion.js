import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import IconButton from "@material-ui/core/IconButton";

import UserContext from "../../context/UserContext";

import VoterAvatar from "./VoterAvatar";

const getVoters = voters => Object.values(voters);

const NameSuggestion = ({ name, votes, voters, voteHandler }) => {
  const user = useContext(UserContext);
  const hasVoted = !!voters[user.id];
  return (
    <ListItem key={name}>
      <ListItemText primary={name} secondary={votes} />
      {getVoters(voters).map(voter => (
        <VoterAvatar {...voter} key={voter.name} />
      ))}
      <IconButton color="primary" onClick={voteHandler}>
        {hasVoted ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
      </IconButton>
    </ListItem>
  );
};

export default NameSuggestion;
