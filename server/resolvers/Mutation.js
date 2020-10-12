const Book = require("../models/Book");
const Author = require("../models/Author");

async function addAuthor(parent, args) {
  try {
    let author = new Author({
      name: args.name,
      age: args.age,
    });
    await author.save();
    return author;
  } catch (error) {
    throw error;
  }
}

async function addBook(parent, args) {
  try {
    let book = new Book({
      name: args.name,
      genre: args.genre,
      authorId: args.authorId,
    });
    await book.save();
    return book;
  } catch (error) {
console.log(error);

  }
}

module.exports = {
  addAuthor,
  addBook,
};
