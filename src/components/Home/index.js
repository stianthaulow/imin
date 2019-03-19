import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import TopBar from "./TopBar";
import Navigation from "./Navigation";
import Question from "./Question";
import StatusMessage from "./StatusMessage";
import AthleteList from "./AthleteList";

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
  const { user, logoutHandler, classes } = props;
  const { changeDay, isCurrentDay, isPast, currentDay } = useDay();
  const { responses, isAttending, hasResponded, setAttending } = useAttendance(
    currentDay.id
  );

  return (
    <div>
      <TopBar user={user} logoutHandler={logoutHandler} />
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
          <AthleteList athletes={responses} />
        </div>
      </div>
      <Navigation
        handleChange={changeDay}
        value={isCurrentDay ? "current" : ""}
      />
    </div>
  );
});
