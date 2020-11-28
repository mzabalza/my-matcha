const Like = require('../models/like.model');
const User = require('../models/user.model');

exports.findAll = (req, res) => {
    // const filters = req.query;
    const user = req.user;

    console.log(req.query);

    const filters = {
        user_id: user.id,
        ...req.query
    }

    Like.getAll(filters, (err, likes) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving likes.",
            });

        else {
            const ids = likes.map(like => like.target_user_id)
            User.findByIds(ids, (err, users) => {
                if (err)
                    return res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving users."
                    });
                else {
                    return res.send(users);
                }
            });
        }
    });
};

exports.like = (req, res) => {
    // Create like and then check if its reciprocal, if yes create Match

    const newLike = new Like({
        id: `${req.user.id}_${req.params.target_user_id}`,
        user_id: req.user.id,
        target_user_id: req.params.target_user_id
    });

    // const isMatch = Like.find(`${req.params.target_user_id}_${req.user.id}`);
    // console.log(Object.entries(isMatch));
    // return res.send(isMatch);
    // console.log(`Is match?: ${isMatch}`);

    Like.create(newLike, (err, data) => {
        if (err) {
            console.log('new Like mike')
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating Like.",
                error: err

            });
        }
        else {
            Like.find(`${req.params.target_user_id}_${req.user.id}`, (err, isMatch) => {
                if (err) {
                    console.log('find mike');
                    res.status(500).send({
                        message:
                            err.message || "Some error finding Like."
                    });
                }
                else {
                    if (!isMatch) {
                        return res.send({ data, message: 'liked new user, still no match' });
                    }
                    Like.match(req.user.id, req.params.target_user_id, (err, match) => {
                        if (err)
                            return res.status(500).send({
                                message:
                                    err.message || "Some error finding Like."
                            });
                        else {
                            return res.send({ data, message: 'liked new user, There is a match!!' });
                        }
                    })
                }
            })
        }
    });
    console.log('final mike')

};

exports.remove = (req, res) => {

    Like.remove(`${req.user.id}_${req.params.target_user_id}`, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing like."
            });
        else res.send(data);
    });
};