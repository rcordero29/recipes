const express = require('express');
const app = express();
app.use(express.json());
const r = require('./routes');
app.use(r);
express.static('../public');
app.use(static);
const PORT = 8000;

app.get('/', function (req, res) {
  res.json('I am Online');
});
app.listen(PORT, function () {
  console.log('application sever listening on port', PORT);
});
