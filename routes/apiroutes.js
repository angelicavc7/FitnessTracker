const router = require("express").Router();
const db = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  db.find()
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get("/api/workouts/range", (req, res) => {
  db.find()
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.post("/api/workouts", ({ body }, res) => {
  db.create(body)
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;