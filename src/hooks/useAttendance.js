import { useState, useEffect } from "react";
import { db } from "../firebase";

const attendanceRef = db.collection("attendance");

function useAttendance(day) {
  const [attending, setAttending] = useState([]);

  useEffect(() => {
    return attendanceRef.doc(day).onSnapshot(snap => {
      if (!snap.exists) setAttending([]);
      else setAttending(snap.data().attending);
    });
  }, [day]);

  const isAttending = user =>
    !!attending.find(athlete => athlete.name === user.name);

  const addAttending = user => () => {
    attendanceRef
      .doc(day)
      .set({ attending: [...attending, { name: user.name, img: user.img }] });
  };

  const removeAttending = user => () => {
    attendanceRef.doc(day).set({
      attending: attending.filter(athlete => athlete.name !== user.name)
    });
  };

  return { attending, isAttending, addAttending, removeAttending };
}

export default useAttendance;
