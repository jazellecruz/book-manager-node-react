require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const {BOOKED_API} = require("./src/config/index");

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
}));

app.get("/books", async(req, res) => {
  let response = await axios(`http://localhost:8000/books`);
  res.send(response.data);
});

app.post("/categories", async(req, res) => {
  let response = await axios(`http://localhost:8000/categories`);
  res.send(response.data);
});

app.get("/categories", async(req, res) => {

});

app.get("/status", async(req, res) => {

});

app.post("/reviews", async(req, res) => {

});


app.listen(5000, "localhost", (req, res) => console.log("Running on port 5000!"));