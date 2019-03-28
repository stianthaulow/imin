import React, { useContext } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Navigation from "./Navigation";
import Question from "./Question";
import StatusMessage from "./StatusMessage";
import AthleteList from "./AthleteList";

import UserContext from "../../context/UserContext";

import useDay from "../../hooks/useDay";
import useAttendance from "../../hooks/useAttendance";

const styles = theme => ({
  page: {
    display: "flex",
    justifyContent: "center",
    padding: "1em"
  }
});

export default withStyles(styles)(function Home(props) {
  const { classes } = props;
  const user = useContext(UserContext);
  const {
    changeDay,
    isCurrentDay,
    isPast,
    currentDay,
    swipeHandlers
  } = useDay();
  const { responses, isAttending, hasResponded, setAttending } = useAttendance(
    currentDay.id
  );

  return (
    <div {...swipeHandlers} style={{ height: "100vh" }}>
      <div className={classes.page}>
        <div>
          {!isPast && (
            <Question
              yesHandler={setAttending(user, true)}
              noHandler={setAttending(user, false)}
              isAttending={isAttending(user)}
              hasResponded={hasResponded(user)}
            />
          )}
          <StatusMessage day={currentDay.label} isPast={isPast} />
          <AthleteList athletes={responses} isPast={isPast} />
        </div>
      </div>
      <Navigation
        handleChange={changeDay}
        value={isCurrentDay ? "current" : ""}
      />
    </div>
  );
});
