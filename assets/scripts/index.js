'use strict';

// user require with a reference to bundle the file and use it in this file
// let example = require('./example');

const events = require('./events.js');




// On document ready
$(() => {
  events.addHandlers();
});
