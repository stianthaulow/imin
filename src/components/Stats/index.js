import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import AthleteAvatar from "../AthleteAvatar";
import { withStyles } from "@material-ui/core";

const attendanceRef = db.collection("attendance");

const styles = {
  avatarColumn: {
    width: 30,
    paddingRight: 0
  }
};

const rank = attendance =>
  Object.values(
    attendance
      .map(day =>
        day.responses
          .filter(({ attending }) => attending === true)
          .map(({ name, img }) => ({ name, img }))
      )
      .flat()
      .reduce((rank, current) => {
        if (rank[current.name]) {
          rank[current.name].count++;
        } else {
          rank[current.name] = { ...current, count: 1 };
        }
        return rank;
      }, {})
  ).sort((a, b) => b.count - a.count);

const Stats = ({ classes }) => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    return attendanceRef.onSnapshot(snap => {
      if (snap.empty) setAttendance([]);
      else {
        setAttendance(snap.docs.map(doc => ({ ...doc.data(), day: doc.id })));
      }
    });
  }, []);

  console.log(JSON.stringify(rank(attendance), null, 2));

  return (
    <>
      <Typography variant="h5" style={{ margin: "1em" }}>
        Antall treninger
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>Navn</TableCell>
            <TableCell align="right">Treninger</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rank(attendance).map(athlete => (
            <TableRow key={athlete.name}>
              <TableCell className={classes.avatarColumn}>
                <AthleteAvatar {...athlete} />
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography>{athlete.name}</Typography>
              </TableCell>
              <TableCell align="right">{athlete.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default withStyles(styles)(Stats);
