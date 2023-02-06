const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: [true, "A book must have an author"],
    unique: true,
    trim: true,
  },
  imageLink: String,
  language: String,
  link: String,
  pages: Number,
  title: {
    type: String,
    required: [true, "A book must have a title"],
    unique: true,
    trim: true,
  },
  year: String,
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
