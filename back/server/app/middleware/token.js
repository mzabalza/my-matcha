const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// const config = require('config');

module.exports = function (req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');
    // Check if not token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied ' });
    }
    // Verify token
    try {
        const decoded = jwt.verify(token, process.env['jwtSecret']);
        // req.user = decoded.user;
        User.findById(decoded.user.id, (err, user) => {
            if (err) {
                if (err.kind === "not_found") {
                    return res.status(404).send({
                        message: `Not found User with id ${decoded.user.id}.`
                    });
                } else {
                    return res.status(500).send({
                        message: "Error retrieving User with id " + decoded.user.id
                    });
                }
            } else {
                req.user = user;
                next();

            }
        });

    } catch (err) {

        // return?
        return res.status(401).json({ msg: 'Token is not valid' });
    }

};