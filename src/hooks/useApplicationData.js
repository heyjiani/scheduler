import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then(all => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
    })
  }, []);

  //set selected day as current day
  const setDay = day => setState({ ...state, day });

  /* update number of available spots for current day
  * finds current day, updates spot number using new appointment data, and returns a Days array
  */
  const updateSpots = function(state, appointments, id) {

    const currentDay = state.days.find(day => day.appointments.includes(id));
    let spots = 0;
  
    currentDay.appointments.forEach(id => {
      spots = !appointments[id].interview ? spots + 1 : spots;
    })
  
    return state.days.map(day => ({ ...day, spots }));
  };

  /* add or update an interview to local & database
  * sends put request with interview data in the form of an obj & returns a promise
  */
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateSpots(state, appointments, id);

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(res => {
        setState({ ...state, appointments, days })
      })
  };

  /* delete an interview from local & database
  * sends delete request and returns a promise
  */
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateSpots(state, appointments, id);

    return axios
      .delete(`/api/appointments/${id}`)
      .then(res => setState({ ...state, appointments, days}))
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };

};