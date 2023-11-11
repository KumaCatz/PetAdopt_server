const express = require('express');
const { registerPet } = require('../controllers/pets.controller');
// const upload = require('../utils/multer');
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/register', upload.single('picture'), registerPet);


// router.post('/register', upload.single('picture'), registerPet);

module.exports = router;