var express = require('express');
var piPins = require('pi-pins');
var pin17 = piPins.connect(17);

var app = express();


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
