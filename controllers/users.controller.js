const jwt = require('jsonwebtoken')

module.exports = {
    getUser: (req, res, next) => {
        const { authorization: userId } = req.headers

        const verifiedToken = jwt.verify(accessToken, 'secretString', (err, decoded) => {
            console.log('yay it works!')
        })

        const user = userServices.getUserByKeyValue(req.body, "email")
    }
}