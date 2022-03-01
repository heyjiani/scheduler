import React from "react";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";

import useVisualMode from "hooks/useVisualMode";

import "components/Appointment/styles.scss";
import Status from "./Status";
import Confirm from "./Confirm";

export default function Appointment(props) {
  const { id, time, interview, interviewers, bookInterview, cancelInterview } = props;

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";

  const { mode, transition, back } = useVisualMode(
      interview ? SHOW : EMPTY
    );

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    bookInterview(id , interview)
      .then(transition(SHOW))
      .catch(err => console.log(err.message));
  };

  const handleDelete = () => {
    transition(SAVING);

    setTimeout(() => {
      cancelInterview(id)
      .then(transition(EMPTY))
    }, 1200)

  };

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === SAVING && <Status message={'Loading...'}/>}
      {mode === CONFIRM && (
        <Confirm
          message={'Are you sure you would like to delete this interview?'}
          onCancel={() => back()}
          onConfirm={handleDelete}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={interviewers}
          onCancel={() => back()}
          onSave={save}
        />
      )}
    </article>
  );
}