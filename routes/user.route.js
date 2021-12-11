const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.get('/', userController.getAllUser);
router.post('/', userController.createUser);

module.exports = router;