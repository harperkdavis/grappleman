const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('/test', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App up and running on port ${port}.`);
});