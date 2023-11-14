const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  hashPassword: (password) => {
    return new Promise((res, rej) => {
      bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) return rej();
        res(hash)
      });
    })
  },
  checkPassword: (password, hash) => {
    return new Promise((res, rej) => {
      bcrypt.compare(password, hash, function(err, result) {
        if(err) return rej();
        res(result)
      });
    })
  }
}
