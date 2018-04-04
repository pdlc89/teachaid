const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Students collection and inserts the students below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/students",
  {
    useMongoClient: true
  }
);

const studentSeed = [
  {
    name: "Jenny",
    teacher: "Ms Ly",
    award: "July",
    notes: "Good Kid",
    date: new Date(Date.now())
  },
  {
    name: "Pedro",
    teacher: "Mr Towne",
    award: "No assembly",
    Notes: "Good Kid",
    date: new Date(Date.now())
  }
];
const chatSeed = [
    {
        name: "teach",
        message: "Hello World",
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

db.Chat
    .remove({})
    .then(() => db.Chat.collection.insertMany(chatSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
