const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/track-my-workout-now",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const exerciseController = require("./controllers/exerciseController");
const indexController = require("./controllers/indexController");
const statsController = require("./controllers/statsController");
const apiController = require("./controllers/apiController.js");
const workoutController = require("./controllers/workoutController");

app.get("/", (req, res) => {
  res.send("index.html");
});

app.use(exerciseController);
app.use(indexController);
app.use(statsController);
app.use(apiController);
app.use(workoutController);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
