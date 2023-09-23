const express = require("express");
const RatingController = require("../controllers/Rating");
const router = express.Router();

router.post("/createFeedback", RatingController.createFeedback);
router.get("/getAllFeedback", RatingController.getAllFeedback);

module.exports = router;
