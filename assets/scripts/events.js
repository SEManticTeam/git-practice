'use strict';

const api = require('./api');
const ui = require('./ui');

const onGetBooks = (event) => {
  event.preventDefault();
  api.getBooks()
  .done(ui.showBooks)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#get-books').on('click', onGetBooks);

};

module.exports = {
  addHandlers,
};
