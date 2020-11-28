const Like = require('../models/like.model');
const User = require('../models/user.model');

exports.findAll = (req, res) => {

    const filters = req.query;

    Like.getAll(filters, (err, likes) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving likes."
            });
        else {
            User.findByIds(likes.map(likes => likes.target_user_id), (err, users) => {
                return res.send(users)
            });
        }
    });


};
