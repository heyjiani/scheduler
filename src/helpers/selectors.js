export function getAppointmentsForDay(state, name) {
  const appointmentsArray = [];

  const filteredDay = state.days.length && state.days.filter(day => day.name === name);

  filteredDay[0]
    && filteredDay[0].appointments.map(id => appointmentsArray.push(state.appointments[id]));

  return appointmentsArray;
};