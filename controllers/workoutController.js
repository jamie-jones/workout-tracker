const { Router } = require("express");
const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/workout", (req, res) => {
  db.Workout.find({})
    .populate("workouts")
    .then((foundWorkouts) => {
      res.json(foundWorkouts);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to retrieve workout",
      });
    });
});

router.get("/api/workout/:id", (req, res) => {
  db.Workout.findById(req.params.id)
    .populate("workouts")
    .then((foundWorkouts) => {
      res.json(foundWorkouts);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: `Failed to retrieve workout with id: ${req.params.id}`,
      });
    });
});

router.post("/api/workout", (req, res) => {
  db.Workout.create(req.body)
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      console.log({
        error: true,
        data: null,
        message: "Failed to create a new workout.",
      });
    });
});

router.put("/api/workout/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedWorkout) => {
      res.json(updatedWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to update pizza.",
      });
    });
});

router.delete("/api/workout/:id", (req, res) => {
  db.Workout.findByIdAndDelete(req.params.id)
    .then((deletedWorkout) => {
      res.json(deletedWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to delete pizza.",
      });
    });
});

module.exports = router;
