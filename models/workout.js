const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "a string  is required",
      },
      type: {
        type: String,
        trim: true,
        required: "a string is required",
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
    },
  ],
});
const Workout = mongoose.model("workout", workOutSchema);

module.exports = Workout;