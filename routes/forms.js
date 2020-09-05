const router = require("express").Router();
const formsController = require("../controller/forms");

router.get("/", formsController.getAllForms);
router.post("/", formsController.addNewForm);
router.post("/:id/questions", formsController.addNewFormQuestion);
router.delete("/:id/questions/:question", formsController.deleteFormQuestion);
router.delete("/:id", formsController.deleteForm);

module.exports = router;
