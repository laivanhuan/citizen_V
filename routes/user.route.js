const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/info', userController.getAccountInfo);
router.get('/childs', userController.getChildUser);
router.post('/:type/:id', userController.lockAccount);

module.exports = router;