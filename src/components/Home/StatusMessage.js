import React from "react";
import Typography from "@material-ui/core/Typography";

const StatusMessage = props => {
  const { day, isPast } = props;
  return (
    <Typography>
      {isPast ? "Disse var der" : "Disse kommer"} på onsdag {day}:
    </Typography>
  );
};

export default StatusMessage;
