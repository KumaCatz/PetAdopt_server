const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

module.exports = {
    uploadFile: (upload.single('file'), function (req, res, next) {
        console.log(req.file)
        res.send('uploaded')
      })
}