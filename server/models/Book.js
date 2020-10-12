const mongoose = require("mongoose");

const Book = mongoose.model("Book", {
  name: String,
  genre: String,
  authorId: String,
});
module.exports = Book;
