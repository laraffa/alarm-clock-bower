(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var AlarmTime = function(firstName, alarmTime) {
    this.firstName = firstName;
    this.alarmTime = alarmTime;
};

AlarmTime.prototype.setRing = function(alarmTime) {

  var array = [];
  setInterval(function() {
    var startingTime = moment().format('HH:mm');
    if (startingTime === alarmTime) {
      alert("Time to Wake Up!");
    }
    console.log(startingTime);
  }, 60000);
}




exports.AlarmModule = AlarmTime;

},{}],2:[function(require,module,exports){


var AlarmTime = require('./../js/alarm.js').AlarmModule;

$(document).ready(function() {


  $('.enterTime').submit(function(event){
    event.preventDefault();

    setInterval(function() {
      var time = moment().format('HH:mm');
      $('#time').html(time);
    }, 60000);
    var firstName = $('#firstName').val();
    var alarmTime = $('#alarm-time').val();
    var newAlarm = new AlarmTime(firstName, alarmTime);
    $('.display-area').append(newAlarm.firstName + "<p></p>");
    $('.display-area').append(newAlarm.alarmTime);
    $('.display-alarm').append(alarmTime);
    console.log(newAlarm.alarmTime);
    newAlarm.setRing(newAlarm.alarmTime);
  });

  // newAlarm.setRing(time, enterTime)

});

},{"./../js/alarm.js":1}]},{},[2]);
