const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Activated, and listening on Port 3000');
});
