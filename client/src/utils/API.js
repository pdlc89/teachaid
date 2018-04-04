import axios from "axios";

export default {
  // Gets all students
  getStudents: function() {
    return axios.get("/api/students");
  },
  // Gets the student with the given id
  getStudent: function(id) {
    return axios.get("/api/students/" + id);
  },
  // Deletes the student with the given id
  deleteStudent: function(id) {
    return axios.delete("/api/students/" + id);
  },
  // Saves a student to the database
  saveStudent: function(studentData) {
    return axios.post("/api/students", studentData);
  },
    // Gets all chat
  getChat: function () {
      return axios.get("/api/chat");
  },
  // Deletes the message with the given id
  deleteChat: function (id) {
      return axios.delete("/api/chat/" + id);
  },
  // Saves a message to the database
  saveChat: function (chatData) {
      return axios.post("/api/chat", chatData);
  }
};
