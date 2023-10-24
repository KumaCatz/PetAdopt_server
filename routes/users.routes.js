const express = require('express')
const router = express.Router()
const {getUser} = require('../controllers/users.controller')

router.get('/', (req, res, next) => {
  res.send("bitchin")
})
router.get('/me', getUser)

module.exports = router