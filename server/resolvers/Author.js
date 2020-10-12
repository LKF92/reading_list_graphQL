const Book = require("../models/Book");
const Author = require("../models/Author");

async function books(parent, args) {
  try {
    let books = await Book.find({ authorId: parent.id });
    return books;
  } catch (error) {
    throw error;
  }
}

module.exports = { books };
