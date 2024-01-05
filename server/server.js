require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const books_route = require("./src/routes/books");
const auth_route = require("./src/routes/auth");
const { isUserAuthenticated } = require("./src/middleware/auth");
const { errorHandler } = require("./src/middleware/error");

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
}));

app.use(express.json());
app.use(cookieParser());

app.use("/auth", auth_route);

app.use("/books", isUserAuthenticated, books_route);

app.use(errorHandler);

app.listen(5000, "localhost", (req, res) => {
  if(process.env.NODE_ENV === "development") {
    console.log("Currently running in development environment.");
  }

  console.log("Running on port 5000!")
});