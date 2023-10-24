const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());
const middleWare = (req, res, next) => {

  next()
}
app.use(middleWare)

app.use('/users', require('./routes/users.routes'))

app.use('/auth', require('./routes/auth.routes'))


app.use((err, req, res, next) => {
  try {
    const [statusCode, msg] = err

    res.status(statusCode).send({
      error: true,
      message: msg,
    })  
  } catch (error) {
    res.status(500).send({
      error: true,
      message: error,
    })
  }
})

app.listen(2500, () => {
  console.log('App listening on port 2500')
})