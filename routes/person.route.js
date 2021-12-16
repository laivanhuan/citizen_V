const express = require('express');
const { personController } = require('../controllers');

const router = express.Router();

router.get('/', personController.getPerson);
router.get('/detail/:id', personController.getPersonDetails);
router.post('/', personController.createNewPerson);
router.put('/', personController.updatePersonInfo);
router.delete('/', personController.deletePersonInfo);

module.exports = router;