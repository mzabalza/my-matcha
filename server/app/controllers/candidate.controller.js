const Like = require('../models/like.model');
const Block = require('../models/block.model');
const User = require('../models/user.model');
const Image = require('../models/image.model');


// Retrieve all Users from the database.
exports.findAll = (req, res) => {

    const user = req.user;


    Like.getAll({ user_id: user.id }, (err, likes) => {
        if (err)
            return res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving likes."
            });

        else {

            Block.getAll({}, (err, blocks) => {
                if (err)
                    return res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving blocks."
                    });
                else {
                    // get array of blocks id's
                    const blockIds = blocks.map(like => like.target_user_id);
                    // get array of like id's
                    const likeIds = likes.map(like => like.target_user_id);

                    const ids = [...likeIds, ...blockIds];

                    User.getAll({ gender: user.gender_target }, (err, users) => {
                        if (err)
                            return res.status(500).send({
                                message:
                                    err.message || "Some error occurred while retrieving users."
                            });
                        else {
                            // get missing elements
                            const miss = users.filter(user => {
                                // check element in id's array
                                return ids.indexOf(user.id) == -1;
                            });

                            res.send(miss);
                        }
                    });
                }
            })

        }
    });




};
