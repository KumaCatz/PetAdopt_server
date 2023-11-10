const express = require('express');
const { registerPet } = require('../controllers/pets.controller');
const router = express.Router();

router.post('/register', registerPet);

module.exports = router;