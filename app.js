var express = require('express');
var pin16 = require('pi-pin').connect(16);

var app = express();

pin16.mode('low');
app.get('/on', function(req, res){
  pin16.mode('high');
  res.send('in on');
})

app.get('/off', function(req, res){
  pin16.mode('low');
  res.send('in off');
})

app.listen(3010);
console.log('lisening on 3010');
