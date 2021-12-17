const express = require('express');
const { personController } = require('../controllers');

const router = express.Router();

router.get('/', personController.getPerson);
router.get('/detail/:id', personController.getPersonDetails);
router.post('/', personController.createNewPerson);
router.put('/:id', personController.updatePersonInfo);
router.delete('/:id', personController.deletePersonInfo);

module.exports = router;