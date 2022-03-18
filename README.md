# Interview Scheduler

A single page application built using _React_ that allows users to book, update, and cancel appointments throughout a week. Users can enter student names and choose from a list of interviewers. _Axios_ handles all the data requests! 

Components were built and tested in a _Storybook_ environment. Unit/Integration testing was done in _Jest_, and end-to-end testing was done in _Cypress_. 

Check out a deployed version [HERE!](https://elegant-hodgkin-708257.netlify.app/)

This project was built as part of my learnings at [LighthouseLabs](https://www.lighthouselabs.ca/). 

## Built With

* [React.js](https://reactjs.org/)
* [Axios](https://axios-http.com/)
* [Node.js](https://nodejs.org/en/)
* [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
* [PostgreSQL](https://www.postgresql.org/)

## Testing

* [Storybook](https://storybook.js.org/)
* [Jest](https://jestjs.io/)
* [Testing Library](https://testing-library.com/)
* [Cypress](https://www.cypress.io/)

## Features

Users can navigate to a day of their choosing and add an appointment to one of the available time slots. 
![Add new appointment](https://github.com/heyjiani/scheduler/blob/master/docs/scheduler-ui-add.gif?raw=true)

Users can edit an existing appointment by clicking the Edit button. They have the option of updating both the student name and the chosen interviewer. 
![Edit appointment](https://github.com/heyjiani/scheduler/blob/master/docs/scheduler-ui-edit.gif?raw=true)

Users can delete an existing appointment by clicking the little trash can button. 
![Delete appointment](https://github.com/heyjiani/scheduler/blob/master/docs/scheduler-ui-delete.gif?raw=true)

## Getting Started

Install dependencies with `npm install`.

### Running Webpack Development Server

```sh
npm start
```

### Running Scheduler API Server


Fork and clone the [scheduler API](https://github.com/lighthouse-labs/scheduler-api) in a separate directory.
```sh
npm install
npm start
```

### Running Jest Test Framework

```sh
npm test
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```


## Dependencies

* axios: _^0.26.0_
* classnames: _^2.2.6_
* normalize.css: _^8.0.1_
* react: _^16.9.0_
* react-dom: _^16.9.0_
* react-scripts: _3.0.0_
* node: _v12.x.x_ OR _v15.x.x (for Mac M1)_
