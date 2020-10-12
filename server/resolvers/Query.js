const Book = require("../models/Book");
const Author = require("../models/Author");

async function book(parent, args) {
  try {
    let book = await Book.findById(args.id);
    return book;
  } catch (error) {
    throw error;
  }
}

async function author(parent, args) {
  try {
    let author = await Author.findById(args.id);
    return author;
  } catch (error) {
    throw error;
  }
}

async function allBooks() {
  try {
    let books = await Book.find();
    return books;
  } catch (error) {
    throw error;
  }
}
async function allAuthors() {
  try {
    let authors = await Author.find();
    return authors;
  } catch (error) {
    throw error;
  }
}
module.exports = { book, author, allBooks, allAuthors };
