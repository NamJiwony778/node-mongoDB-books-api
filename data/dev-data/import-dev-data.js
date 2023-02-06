const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Book = require("../../models/bookModel");
dotenv.config({ path: "./config.env" });
console.log(process.env.DATABASE);
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connection");
  });

const books = JSON.parse(
  fs.readFileSync(`${__dirname}/books-data.json`, "utf-8")
);

const importData = async () => {
  try {
    await Book.create(books);
    console.log("Data loaded");
  } catch (err) {
    console.log(err);
  }

  process.exit();
};

importData();
