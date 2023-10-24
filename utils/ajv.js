const Ajv = require('ajv')
const ajv = new Ajv()

ajv.addKeyword('isNotEmpty', {
  type: 'string',
  validate: function (schema, data) {
    return typeof data === 'string' && data.trim() !== ''
  },
  error: {
    message: 'string field must be non-empty'
  },
  errors: false
})

module.exports = ajv