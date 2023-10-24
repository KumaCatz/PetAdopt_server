const schema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      isNotEmpty: true
    },
    password: {
      type: "string",
      isNotEmpty: true,
    }
  },
  required: ["email", "password"],
  additionalProperties: false
}

module.exports = schema