// jshint esversion:8
const express = require('express');

const app = express();

app.use(express.static('./dist/dona-pedro'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', { root: 'dist/dona-pedro/' }
);
});

app.listen(process.env.PORT || 8080, () => {
  console.log('App Started successfully');
});