import React from "react";

import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, day, setDay } = props;

  const parsedDays =
    Array.isArray(days) && days.map(dayItem => {
    dayItem.selected = (day === dayItem.name);
    dayItem.setDay = setDay;

    return <DayListItem key={dayItem.id} {...dayItem}/>
  });

  return (
    <ul>
      { parsedDays }
    </ul>
  )
}