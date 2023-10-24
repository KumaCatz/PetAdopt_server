const DB = require('../db')
const users = new DB('users')

const services = {
  getUserByKeyValue: (body, keyProp) => {
    const user = users.getDataByKeyValue(body, keyProp)
    return user
  },
  compareUserDataByKeyValue: (body, keyProp) => {
    const isEqual = users.compareDataByKeyValue(body, keyProp)
    return isEqual
  },
  addUser: (body, hash) => {
    return users.addData({...body, password: hash})
  }
}

module.exports = services