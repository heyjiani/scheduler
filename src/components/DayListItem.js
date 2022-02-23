import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

const formatSpots = (spots) => {
  return (
    (!spots && "no spots remaining")
    || (spots === 1 && "1 spot remaining")
    || (`${spots} spots remaining`)
  );
};

export default function DayListItem(props) {
  const { name, spots, selected, setDay } = props;

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": !spots
  });

  return (
    <li
      className={dayClass}
      onClick={() => setDay(name)}
      selected={selected}
    >
      <h2 className="text--regular">{name}</h2> 
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}