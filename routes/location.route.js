const express = require("express");
const { localtionController } = require('../controllers');

const router = express.Router();

router.get("/", localtionController.getLocation);

module.exports = router;
