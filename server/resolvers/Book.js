const Book = require("../models/Book");
const Author = require("../models/Author");

async function author(parent, args, context) {
  try {
    let author = await Author.findById(parent.authorId);
    return author;
  } catch (error) {
    throw error;
  }
}

module.exports = { author };
