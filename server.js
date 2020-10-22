const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const workoutController = require("./controllers/workoutController");
app.use(workoutController);

// MONGOOSE MIDDLEWARE
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/track-my-workout-now",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("Mongoose successfully connected");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "./public.stats.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
