import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import IconButton from "@material-ui/core/IconButton";

import UserContext from "../../context/UserContext";

import AthleteAvatar from "../AthleteAvatar";

const getVoters = voters => Object.values(voters);

const NameSuggestion = ({ name, votes, voters, suggestor, voteHandler }) => {
  const user = useContext(UserContext);
  const hasVoted = !!voters[user.id];
  return (
    <ListItem key={name}>
      <ListItemText
        primary={name}
        secondary={`av ${suggestor}, stemmer: ${votes}`}
      />
      {getVoters(voters).map(voter => (
        <AthleteAvatar {...voter} key={voter.name} size="small" />
      ))}
      <IconButton color="primary" onClick={voteHandler}>
        {hasVoted ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
      </IconButton>
    </ListItem>
  );
};

export default NameSuggestion;
