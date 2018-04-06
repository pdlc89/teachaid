const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { 
    type: String,
    trim: true, 
    required: true 
  },
  teacher: { 
    type: String,
    trim: true,
    required: true
  },
  award: {
    type: String, 
    required: true
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
