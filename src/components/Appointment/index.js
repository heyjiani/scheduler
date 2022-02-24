import React from "react";

import "components/Appointment/styles.scss";

export default function Appointment(props) {
  const { time } = props;

  return (
    <article className="appointment">
      {time ? <span>Appointment at {time}</span> : <span>No Appointments</span>}
    </article>
  );
}