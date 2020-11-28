const image = require("../controllers/image.controller.js");
const multer = require("multer");
const path = require('path')
const { uuid } = require('uuidv4');

// const upload = multer({ dest: "uploads/images" });
const token = require('../middleware/token');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/images")
    },
    filename: function (req, file, cb) {
        cb(null, `${uuid()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

module.exports = app => {

    // Get all images (filtered)
    app.get('/api/image', image.findAll);
    // Get all images (filtered)
    app.get('/api/image/:imageId', image.getOne);
    // Upload image
    app.post('/api/image', [token, upload.single("file")], image.upload);
    // Delete all images
    app.delete('/api/image', image.deleteAll);
};