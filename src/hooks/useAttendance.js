import { useState, useEffect } from "react";
import { db } from "../firebase";

const attendanceRef = db.collection("attendance");

function useAttendance(day) {
  const [responses, setResponses] = useState([]);

  const sortResponses = responses =>
    [...responses].sort((a, b) =>
      a.attending === b.attending ? 0 : a.attending ? -1 : 1
    );

  useEffect(() => {
    return attendanceRef.doc(day).onSnapshot(snap => {
      if (!snap.exists) setResponses([]);
      else setResponses(sortResponses(snap.data().responses));
    });
  }, [day]);

  const isAttending = user =>
    !!responses.find(
      athlete => athlete.name === user.name && athlete.attending
    );

  const setAttending = (user, willAttend) => () => {
    let newResponses = responses.filter(athlete => athlete.name !== user.name);
    newResponses.push({
      name: user.name,
      img: user.img,
      attending: willAttend
    });

    attendanceRef.doc(day).set({
      responses: sortResponses(newResponses)
    });
  };

  return { responses, isAttending, setAttending };
}

export default useAttendance;
