const Block = require('../models/block.model');
const Like = require('../models/like.model');


exports.findAll = (req, res) => {
    const filters = req.query;

    Block.getAll(filters, (err, blocks) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving blocks."
            });
        else res.send(blocks);
    });
};

exports.block = async (req, res) => {
    // Removes any possible existing match and creates a block

    const newBlock = new Block({
        id: `${req.user.id}_${req.params.target_user_id}`,
        user_id: req.user.id,
        target_user_id: req.params.target_user_id
    });


    await Like.remove(`${req.user.id}_${req.params.target_user_id}`, (err, data) => {
    });

    Block.create(newBlock, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating Match."
            });
        else res.send(data);

    })
};

exports.remove = (req, res) => {

    Block.remove(`${req.user.id}_${req.params.target_user_id}`, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing block."
            });
        else res.send(data);
    });
};