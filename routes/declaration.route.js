const express = require('express');

const {declarationController} = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

router.get('/', declarationController.getDeclaration);
router.post('/', middlewares.authenticate, declarationController.createNewDeclaration);
router.put('/', middlewares.authenticate, middlewares.isAdmin, declarationController.updateDeclaration);

module.exports = router;