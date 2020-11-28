const Image = require('../models/image.model');


exports.findAll = (req, res) => {
    const filters = req.query;

    Image.getAll(filters, (err, images) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving images."
            });
        else res.send(images);
    });
};

exports.getOne = (req, res) => {

};

// exports.findOne = (req, res) => {
//     Image.findById(req.params.imageId, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Not found User with id ${req.params.imageId}.`
//                 });
//             } else {
//                 res.status(500).send({
//                     message: "Error retrieving User with id " + req.params.imageId
//                 });
//             }
//         } else res.send(data);
//     });
// };

exports.upload = (req, res) => {
    // console.log(body);
    const newImage = new Image({
        // id: req.body.id,
        path: req.file.filename,
        user_id: req.user.id,
    });

    Image.create(newImage, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating Image."
            });
        else res.send(data);
    });

};


// Delete all Images from the database.
exports.deleteAll = (req, res) => {
    Image.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all images."
            });
        else res.send({ message: `All images were deleted successfully!` });
    });
};