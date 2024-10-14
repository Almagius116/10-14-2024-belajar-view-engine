const express = require("express");
const router = express.Router();

const upload = require("../middlewares/uploader");
const dashboardController = require("../controller/dashboardController");

// Cars API
// router.post("/", upload.array("images", 10), carController.createCar);
router.get("/users", dashboardController.userPage);
router.get("/users/create", dashboardController.createPage);
module.exports = router;
