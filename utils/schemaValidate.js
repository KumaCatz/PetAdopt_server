const ajv = require('./ajv')
const { ERR } = require('./errors')

const validate = (schema) => {
  return (req, res, next) => {
      try {
        const validate = ajv.compile(schema)
        const isValid = validate(req.body)
        if(!isValid) {
          return next([400, validate.errors.map(item => item.message)])
        }
        return next()
      } catch(error) {
        return next(ERR)
      }
    }
}

module.exports = validate