import React from "react";
import List from "@material-ui/core/List";
import AthleteListItem from "./AthleteListItem";

const AthleteList = props => {
  const { athletes } = props;
  return (
    <List style={{ marginBottom: "3em" }}>
      {athletes.map(athlete => (
        <AthleteListItem {...athlete} key={athlete.name} />
      ))}
    </List>
  );
};

export default AthleteList;
