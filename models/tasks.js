const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create tasks schema
const TaskSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    default: Date.now
  }
});
module.exports = Task = mongoose.model("task", TaskSchema);
