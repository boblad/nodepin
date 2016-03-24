var express = require('express');
var piPins = require('pi-pins');
var theaterPin = piPins.connect(2);
// var pingPongPin = piPins.connect(3);
// var underStairsPin = piPins.connect(4);
// var foodPin = piPins.connect(22);
// var gymPin = piPins.connect(14);
// var bathPin = piPins.connect(15);
// var kitchenPin = piPins.connect(18);
// var playAreaPin = piPins.connect(17);
// var outsidePin = piPins.connect(27);

var app = express();

var getPin = function(pinId) {
  pinId = parseInt(pinId);
  // if (pinId === 2) {
  //   return theaterPin;
  // } else if (pinId === 3) {
  //   return pingPongPin;
  // } else if (pinId === 4) {
  //   return underStairsPin;
  // } else if (pinId === 22) {
  //   return foodPin;
  // } else if (pinId === 14) {
  //   return gymPin;
  // } else if (pinId === 15) {
  //   return bathPin;
  // } else if (pinId === 18) {
  //   return kitchenPin;
  // } else if (pinId === 17) {
  //   return playAreaPin;
  // } else if (pinId === 3) {
  //   return outsidePin;
  // }
  return theaterPin;
}

app.get('/basement/:pin/on', function(req, res){
  console.log('pin on', req.params.pin);
  var currentPin = getPin(req.params.pin);
  currentPin.mode('high');
  res.send('light on');
});

app.get('/basement/:pin/off', function(req, res){
  console.log('pin off', req.params.pin);
  var currentPin = getPin(req.params.pin);
  currentPin.mode('low');
  res.send('light off');
});

app.get('/basement/kill-all', function(req, res) {
  theaterPin.mode('low');
  pingPongPin.mode('low');
  underStairsPin.mode('low');
  foodPin.mode('low');
  gymPin.mode('low');
  bathPin.mode('low');
  kitchenPin.mode('low');
  playAreaPin.mode('low');
  outsidePin.mode('low');
  res.send('killed all lights');
})

app.listen(3010);
console.log('lisening on 3010');
