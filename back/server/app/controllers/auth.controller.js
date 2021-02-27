const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const config = require('config');


const { validateParams } = require('./validator');

exports.token = (req, res) => {
    User.findById(req.user.id, (err, user) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with email ${email}.`
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving User with email ${email}.`
                });
            }
        } else {
            console.log(`User token valid: ${user.firstname}`)
            // console.log(user);
            res.send({ user })
        }

    })

};

exports.login = (req, res) => {


    const { email, password } = req.body;

    // 1 Find user by email / id (new user.model)
    User.findByEmail(email, (err, user) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with email ${email}.`
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving User with email ${email}.`
                });
            }
        } else {

            // 4. Return jsonwebtoken
            const payload = {
                user: {
                    id: user.id
                }
            }

            // jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
            jwt.sign(payload, process.env['jwtSecret'], { expiresIn: 360000 }, (err, token) => {
                if (err) throw err;
                console.log(`Login success for user: ${email}`);
                res.json({ token });
            })
        }
    });

}
