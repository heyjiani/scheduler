# Interview Scheduler

A single page application built using React that allows users to book, update, and cancel appointments throughout a week. Users can enter student names and choose from a list of interviewers. Axios handles all of the data requests! 

Components were built and tested in a Storybook environment. Unit/Integration testing was done in Jest, and end-to-end testing was done in Cypress. 

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
![Add new appointment](https://github.com/heyjiani/scheduler/blob/master/docs/scheduler-ui-add.gif?raw=true)
![Edit appointment](https://github.com/heyjiani/scheduler/blob/master/docs/scheduler-ui-edit.gif?raw=true)
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
