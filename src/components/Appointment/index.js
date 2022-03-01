import React from "react";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

import useVisualMode from "hooks/useVisualMode";

import "components/Appointment/styles.scss";

export default function Appointment(props) {
  const { id, time, interview, interviewers, bookInterview, cancelInterview } = props;

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const EDIT = "EDIT";
  const CONFIRM = "CONFIRM";

  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

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
    .then(() => transition(SHOW))
    .catch(err => transition(ERROR_SAVE))
  };

  const handleDelete = () => {
    transition(DELETING);

    cancelInterview(id)
    .then(() => transition(EMPTY))
    .catch(err => transition(ERROR_DELETE))
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
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={interviewers}
          onCancel={() => back()}
          onSave={save}
        />
      )}
      {mode === SAVING && <Status message={'Saving...'}/>}
      {mode === DELETING && <Status message={'Deleting...'}/>}
      {mode === EDIT && (
        <Form
          interviewers={interviewers}
          student={interview.student}
          interviewer={interview.interviewer.id}
          onCancel={() => back()}
          onSave={save}
        />
      )}
      {mode === CONFIRM && (
        <Confirm
          message={'Are you sure you would like to delete this interview?'}
          onCancel={() => back()}
          onConfirm={handleDelete}
        />
      )}
      {mode === ERROR_SAVE && <Error message={"Failed to save, please try again"} onClose={() => back()} />}
      {mode === ERROR_DELETE && <Error message={"Failed to delete, please try again"} onClose={() => back()} />}
    </article>
  );
}