const { ERR, ERR_EMAIL_OR_PASSWORD, ERR_SERVER } = require('../utils/errors')
const userServices = require('../services/users.service')
const bcrypt = require('../utils/bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  loginUser: async (req, res, next) => {
    try {
      const { body } = req
      const user = userServices.getUserByKeyValue(body, "email")
      const isPassword = await bcrypt.checkPassword(body.password, user.password)
      if (!user || !isPassword) {
        return next(ERR_EMAIL_OR_PASSWORD)
      }
      const accessToken = jwt.sign({
        userId: user.id
      }, 'secretString', {expiresIn: '1d'})

      res.send(accessToken)
    } catch (error) {
      return next(ERR)
    }
  },
  registerUser: async (req, res, next) => {
    try {
      const { body } = req
      const hash = await bcrypt.hashPassword(body.password)
      const newId = userServices.addUser(body, hash)
      res.send({ id: newId })
    } catch (err) {
      next(ERR_SERVER)
    }
  }
}