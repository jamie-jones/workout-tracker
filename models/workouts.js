const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeightWorkoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    trim: true,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,
  },
});

const Workouts = mongoose.model("Weights", WeightWorkoutSchema);
