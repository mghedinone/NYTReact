const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gradeSchema = new Schema({
  name: { type: String, required: true },
  teacher: { type: String, required: true },
  grade: { type: String, required: true },
  comments: String,
  date: { type: Date, default: Date.now }
});

const Grade = mongoose.model("Grades", gradeSchema);

module.exports = Grade;
