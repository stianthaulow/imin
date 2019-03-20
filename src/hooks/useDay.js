import { useState } from "react";

let d = new Date();
d.setHours(19);
d.setDate(d.getDate() + ((3 - d.getDay()) % 7));
const months = [
  "januar",
  "februar",
  "mars",
  "april",
  "mai",
  "juni",
  "juli",
  "august",
  "september",
  "oktober",
  "november",
  "desember"
];

const subtractDays = (numDays, date) =>
  new Date(date - 1000 * 60 * 60 * 24 * numDays);

const addDays = (numDays, date) => subtractDays(-numDays, date);

const findNextWednesday = d => ({
  date: d,
  id: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
  label: `${d.getDate()}, ${months[d.getMonth()]} ${d.getFullYear()}`
});

const prevWednesday = d => findNextWednesday(subtractDays(7, d));
const futureWednesday = d => findNextWednesday(addDays(7, d));

const nextWednesday = findNextWednesday(d);

function useDay() {
  const [currentDay, setCurrentDay] = useState(nextWednesday);

  const prevDay = () => {
    setCurrentDay(prevWednesday(currentDay.date));
  };

  const nextDay = () => {
    setCurrentDay(futureWednesday(currentDay.date));
  };

  const resetDay = () => {
    setCurrentDay(nextWednesday);
  };

  const changeDay = (e, change) => {
    switch (change) {
      case "prev":
        prevDay();
        break;
      case "future":
        nextDay();
        break;
      default:
        resetDay();
    }
  };

  const isCurrentDay = currentDay.id === nextWednesday.id;
  const isPast = currentDay.date < new Date();

  return { changeDay, isCurrentDay, isPast, currentDay };
}

export default useDay;
