import React from "react";
import List from "@material-ui/core/List";
import AthleteListItem from "./AthleteListItem";

const AthleteList = ({ athletes, isPast }) => {
  const athletesToList = isPast
    ? athletes.filter(athlete => athlete.attending)
    : athletes;

  return (
    <List style={{ marginBottom: "3em" }}>
      {athletesToList.map(athlete => (
        <AthleteListItem {...athlete} key={athlete.name} />
      ))}
    </List>
  );
};

export default AthleteList;
