// Dependencies
const path = require('path');
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Morgan
app.use(logger("dev"));

app.use(compression());

// Express middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Mongoose
mongoose.connect("process.env.MONGODB_URI || mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} 🚀 \n visit: http://localhost:${PORT}`);
});