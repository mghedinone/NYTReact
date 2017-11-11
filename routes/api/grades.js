const router = require("express").Router();
const gradesController = require("../../controllers/gradeController");

// Matches with "/api/books"
router.route("/")
  .get(gradesController.findAll)
  .post(gradesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(gradesController.findById)
  .put(gradesController.update)
  .delete(gradesController.remove);

module.exports = router;
