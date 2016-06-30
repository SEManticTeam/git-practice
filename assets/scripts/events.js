'use strict';

const api = require('./api');
const ui = require('./ui');

const onGetBooks = (event) => {
  event.preventDefault();
  api.getBooks()
  .done(ui.showBooks)
  .fail(ui.failure);
};

const deleteBook = (event) => {
  event.preventDefault();
  let id = $(event.target).parent().data("id");
  api.deleteBook(id)
  .done(ui.bookDeleted)
  .fail(ui.failure);
  $(event.target).parent().parent().parent().hide();
};

const addHandlers = () => {
  $('#get-books').on('click', onGetBooks);
  $(document).on('click', '#deleteBook', deleteBook);

};

module.exports = {
  addHandlers,
};
