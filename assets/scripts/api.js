'use strict';

const app = require('./app.js');

const getBooks = () => {
  return $.ajax({
    url: app.host + '/books/',
    method: "GET",
  });
};


module.exports = {
  getBooks,
};
