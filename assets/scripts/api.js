'use strict';

const app = require('./app.js');

const getBooks = () => {
  return $.ajax({
    url: app.host + '/books/',
    method: "GET",
  });
};

const deleteBook = (id) => {
  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'DELETE'
  });
};


module.exports = {
  getBooks,
  deleteBook,
};
