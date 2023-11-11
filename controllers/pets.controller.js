const { uploadFile } = require("../utils/multer")


module.exports = {
    registerPet: async (req, res, next) => {
        console.log('req.file', req.file)
        res.send('sent succesfully')
    }
}