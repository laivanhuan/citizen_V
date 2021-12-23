const express = require('express');
const multer = require('multer');
const { fileController } = require('../controllers');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/files');
    },
    filename: (req, file, cb) => {
        cb(null , file.originalname);  
    }
})

const upload = multer({storage:storage});

const router = express.Router();

router.get('/', fileController.getFiles);
router.post('/upload',upload.single('file'), fileController.upload);

module.exports = router;