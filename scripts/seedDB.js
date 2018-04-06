const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Students collection and inserts the students below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const studentSeed = [
  {
    name: "Jennifer Kim",
    teacher: "Mrs. Ly",
    award:"July",
    date: new Date(Date.now())
  },
  {
    name: "Maximus Pinroc",
    teacher: "Mr. Tom",
    award: "No assembly",
    date: new Date(Date.now())
  }
];

db.Student
  .remove({})
  .then(() => db.Student.collection.insertMany(studentSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
