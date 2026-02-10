const mongoose = require("mongoose");

// Note to self: this schema defines what a Book document looks like
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    isbn: {
      type: String,
      unique: true
    },
    publishedDate: {
      type: Date
    },
    inStock: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

// Note to self: the model is how I query the books collection
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
