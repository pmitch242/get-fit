const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// to connect to the DB via the MONGODB_URI
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// routes
app.use(require('./routes/apiRoutes'));


// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  