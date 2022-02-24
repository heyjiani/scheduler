import React from "react";

import InterviewerListItem from "./InterviewerListItem";

import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const { interviewers, interviewer, setInterviewer } = props;

  const parsedInterviewers =
    Array.isArray(interviewers) && interviewers.map(interviewerItem => 
      //interviewerItem.selected = (interviewerItem.id === interviewer)
      //interviewerItem.setInterviewer = () => setInterviewer(interviewerItem.id)
      <InterviewerListItem
        {...interviewerItem}
        key={interviewerItem.id}
        selected={interviewerItem.id === interviewer}
        setInterviewer={() => setInterviewer(interviewerItem.id)}
      />
    );

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        { parsedInterviewers }
      </ul>
    </section>
  )
};