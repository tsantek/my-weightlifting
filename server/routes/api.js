var express = require("express");
var router = express.Router();
const {
  getAllPrograms,
  getProgram,
  getProgramWorkouts,
  addNewProgram,
  editProgram
} = require("../controllers/programs");
const { getWorkoutExercises } = require("../controllers/workouts");

/* PROGRAMS */
router.get("/programs", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Basketball",
      img:
        "https://static-s.aa-cdn.net/img/ios/1103794774/bd5f34ce26c67e002e6c0e8981e0c278?v=1"
    }
  ]);
});
// router.get('/programs/:id', getProgram)
router.get("/programs/:id/workouts", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Day 1",
      img:
        "https://static-s.aa-cdn.net/img/ios/1121042545/bcdf9e6b1a0223b37e57de428c63dfb1?v=1",
      program_id: 1
    },
    {
      id: 2,
      name: "Day 2",
      img: "https://apprecs.org/ios/images/app-icons/256/c7/985518279.jpg",
      program_id: 1
    },
    {
      id: 3,
      name: "Day 4",
      img:
        "https://static-s.aa-cdn.net/img/ios/1121042545/bcdf9e6b1a0223b37e57de428c63dfb1?v=1",
      program_id: 1
    },
    {
      id: 4,
      name: "Day 5",
      img: "https://apprecs.org/ios/images/app-icons/256/c7/985518279.jpg",
      program_id: 1
    }
  ]);
});
router.post("/programs", (req, res) => {
  res.sendStatus(200);
});
router.patch("/programs/:id", (req, res) => {
  res.sendStatus(200);
});
router.delete("/programs/:id", (req, res) => {
  res.sendStatus(200);
});

/* WORKOUTS */
router.get("/workouts/:id/exercises", (req, res) => {
  res.json([
    {
      id: 1,
      workout_id: 1,
      name: "Barbell Bench Press - Medium Grip",
      sets: 4,
      reps: 10,
      img:
        "https://www.bodybuilding.com/exercises/exerciseImages/sequences/360/Male/200sq/360_1.jpg"
    },
    {
      id: 2,
      workout_id: 1,
      name: "Incline Dumbbell Press",
      sets: 4,
      reps: 10,
      img:
        "https://www.bodybuilding.com/exercises/exerciseImages/sequences/380/Male/200sq/380_1.jpg"
    },
    {
      id: 3,
      workout_id: 1,
      name: "Pullups",
      sets: 4,
      reps: 10,
      img:
        "https://www.bodybuilding.com/exercises/exerciseImages/sequences/46/Male/200sq/46_1.jpg"
    },
    {
      id: 4,
      workout_id: 1,
      name: "Seated Cable Rows",
      sets: 4,
      reps: 10,
      img:
        "https://www.bodybuilding.com/exercises/exerciseImages/sequences/45/Male/200sq/45_1.jpg"
    },
    {
      id: 5,
      workout_id: 1,
      name: "Dumbbell Shoulder Press",
      sets: 3,
      reps: 10,
      img:
        "https://www.bodybuilding.com/exercises/exerciseImages/sequences/328/Male/200sq/328_1.jpg"
    },
    {
      id: 6,
      workout_id: 1,
      name: "Upright Barbell Row",
      sets: 3,
      reps: 10,
      img:
        "https://www.bodybuilding.com/exercises/exerciseImages/sequences/365/Male/200sq/365_1.jpg"
    },
    {
      id: 7,
      workout_id: 1,
      name: "Side Lateral Raise",
      sets: 3,
      reps: 10,
      img:
        "https://www.bodybuilding.com/exercises/exerciseImages/sequences/373/Male/200sq/373_1.jpg"
    },
    {
      id: 8,
      workout_id: 1,
      name: "Lying Triceps Press",
      sets: 3,
      reps: 10,
      img:
        "https://www.bodybuilding.com/exercises/exerciseImages/sequences/342/Male/200sq/342_1.jpg"
    },
    {
      id: 9,
      workout_id: 1,
      name: "Dumbbell Bicep Curl",
      sets: 3,
      reps: 10,
      img:
        "https://www.bodybuilding.com/exercises/exerciseImages/sequences/223/Male/200sq/223_1.jpg"
    },
    {
      id: 10,
      workout_id: 1,
      name: "Cable Reverse Crunch",
      sets: 3,
      reps: 10,
      img:
        "https://www.bodybuilding.com/exercises/exerciseImages/sequences/938/Male/200sq/938_1.jpg"
    }
  ]);
});

/* EXERCISES */

module.exports = router;
