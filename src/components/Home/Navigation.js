import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import LeftIcon from "@material-ui/icons/ChevronLeft";
import RightIcon from "@material-ui/icons/ChevronRight";

const style = {
  position: "fixed",
  bottom: 0,
  width: "100%"
};

const Navigation = props => {
  const { handleChange, value } = props;
  return (
    <div style={style}>
      <BottomNavigation value={value} showLabels onChange={handleChange}>
        <BottomNavigationAction
          label="Tidligere"
          value="prev"
          icon={<LeftIcon />}
        />
        <BottomNavigationAction
          label="Neste trening"
          value="current"
          icon={<CalendarIcon />}
        />
        <BottomNavigationAction
          label="Fremtidige"
          value="future"
          icon={<RightIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default Navigation;
