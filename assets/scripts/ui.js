'use strict';

const indexBooks = require('../../handlebars/indexBooks.handlebars');

const failure = (data) => {
  $('#content').html('<h2 style="color:red">Request Failed</h2>');
};

const showBooks = (data) => {
  $('#content').html(indexBooks(data));
};

const bookDeleted = (data) => {
};

module.exports = {
  failure,
  showBooks,
  bookDeleted,
};
