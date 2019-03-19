import React from "react";
import Button from "@material-ui/core/Button";

const buttonStyle = {
  margin: "1em",
  paddingLeft: "1.5em",
  paddingRight: "1.5em",
  paddingTop: ".6em",
  paddingBottom: ".5em"
};

const AnswerButtons = props => {
  const { yesHandler, noHandler, isAttending, hasResponded } = props;
  return (
    <div>
      <Button
        variant="contained"
        style={buttonStyle}
        color="primary"
        onClick={yesHandler}
        disabled={isAttending}
      >
        Jepp
      </Button>
      <Button
        variant="contained"
        style={buttonStyle}
        color="secondary"
        onClick={noHandler}
        disabled={!isAttending && hasResponded}
      >
        Meh, nei
      </Button>
    </div>
  );
};

export default AnswerButtons;
