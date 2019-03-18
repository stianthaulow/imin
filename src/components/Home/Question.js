import React from "react";

import Typography from "@material-ui/core/Typography";
import AnswerButtons from "./AnswerButtons";

const style = {
  textAlign: "center",
  marginTop: "1em"
};

const Question = props => {
  return (
    <div style={style}>
      <Typography variant="h5"> Kommer du på onsdag ? </Typography>
      <AnswerButtons {...props} />
    </div>
  );
};

export default Question;
