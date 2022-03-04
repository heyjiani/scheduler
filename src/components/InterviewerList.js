import React from "react";
import PropTypes from 'prop-types';

import InterviewerListItem from "./InterviewerListItem";

import "components/InterviewerList.scss";

function InterviewerList(props) {
  const { interviewers, value, onChange } = props;

  const parsedInterviewers =
    Array.isArray(interviewers) && interviewers.map(interviewer => 
      <InterviewerListItem
        {...interviewer}
        key={interviewer.id}
        selected={interviewer.id === value}
        setInterviewer={() => onChange(interviewer.id)}
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

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;