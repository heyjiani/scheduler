import { useEffect, useReducer } from "react";
import axios from "axios";

export default function useApplicationData() {

  /* set action type variables for reducer */
  const SET_DAY = "SET_DAY";
  const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
  const SET_INTERVIEW = "SET_INTERVIEW";

  /* reducer to alter current state */
  const reducer = (state, action) => {
    switch (action.type) {
      case SET_DAY:
        return {
          ...state,
          day: action.day
        };
      case SET_APPLICATION_DATA:
        return {
          ...state,
          days: action.days,
          appointments: action.appointments,
          interviewers: action.interviewers
        };
      case SET_INTERVIEW: {
        return {
          ...state,
          appointments: action.appointments,
          days: action.days
        };
      }
      default: {
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
      }
    }
  };

  /* set initial state for reducer */
  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  /* fetch API data */
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then(all => {
      const [ days, appointments, interviewers ] = all;

      /* update state with fetched data */
      dispatch({
        type: SET_APPLICATION_DATA,
        days: days.data,
        appointments: appointments.data,
        interviewers: interviewers.data
      });
    })
  }, []);

  /* set selected day as current day */
  const setDay = day => dispatch({ type: SET_DAY, day });

  /* update number of available spots for current day
  * finds current day, updates spot number using new appointment data, and returns a Days array
  */
  const updateSpots = function(state, appointments, id) {

    const currentDay = state.days.find(day => day.appointments.includes(id));
    let spots = 0;
  
    currentDay.appointments.forEach(id => {
      spots = !appointments[id].interview ? spots + 1 : spots;
    })
  
    return state.days.map(day => (day.name === currentDay.name ? ({ ...day, spots }) : ({ ...day })));
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
      .then(() => {
        dispatch({ type: SET_INTERVIEW, appointments, days })
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
      .then(() => {
        dispatch({ type: SET_INTERVIEW, appointments, days })
      })
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };

};