import React from "react";

import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, value, onChange } = props;

  const parsedDays =
    Array.isArray(days) && days.map(day => {
    day.selected = (day.name === value);
    day.setDay = onChange;

    return <DayListItem key={day.id} {...day}/>
  });

  return (
    <ul>
      { parsedDays }
    </ul>
  )
}