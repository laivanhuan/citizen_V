const express = require("express");

const { localtionController } = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

router.get("/", localtionController.getLocation);
router.post("/village", middlewares.authenticate, localtionController.createVillage);

module.exports = router;
