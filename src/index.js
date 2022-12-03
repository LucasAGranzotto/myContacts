/* eslint-disable no-console */
const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
  console.log('#### ERROR ####');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3000');
});
