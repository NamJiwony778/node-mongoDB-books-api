const express = require("express");
const morgan = require("morgan");

const bookRouter = require("./routes/bookRouters");

const app = express();

//middlawares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

//routes
app.use("/api/v1/books", bookRouter);

module.exports = app;
