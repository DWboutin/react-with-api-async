require('babel/register')({
  stage: 0
});
var express = require('express');
var api = require('./api/server');

api.use(express.static(__dirname + '/public'));
api.get('/', function(req, res){ res.sendFile(__dirname + '/index.html'); });

module.exports = api;