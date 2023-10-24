const express = require('express')
const { loginUser, registerUser } = require('../controllers/auth.controller')
const validate = require('../utils/schemaValidate')
const router = express.Router()
const loginUserSchema = require('../schema/auth/loginUser.schema')

router.post('/register', registerUser)
router.post('/login', validate(loginUserSchema), loginUser)

module.exports = router