const router = require("express").Router();
const studentsController = require("../../controllers/studentsController");
const chatController = require("../../controllers/chatControllers");

// Matches with "/api/students"
router.route("/")
  .get(studentsController.findAll)
  .post(studentsController.create)
  .get(chatController.findAll)
  .post(chatController.create);

// Matches with "/api/students/:id"
router
  .route("/:id")
  .get(studentsController.findById)
  .put(studentsController.update)
  .delete(studentsController.remove);


module.exports = router;
