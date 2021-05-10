'use strict';

// Точка входа в приложение

const App = require('./app');

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.log(err);
  })ж

const app = new App('.', process.env.PORT);
