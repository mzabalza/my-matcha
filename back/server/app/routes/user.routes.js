const users = require("../controllers/user.controller.js");
const validator = require('../middleware/validator');
const token = require('../middleware/token');


module.exports = app => {

    // Create a new User
    app.post("/api/users",
        validator([
            'email', 'password', 'firstname', 'lastname',
            'age', 'gender', 'gender_target'
        ]), users.create);

    // Retrieve all users
    app.get("/api/users", users.findAll);

    // Retrieve a single User with userId
    app.get("/api/users/:userId", users.findOne);

    // Update a User with userId
    app.put("/api/users/:userId", token, users.update);

    // Delete a User with userId
    app.delete("/api/users/:userId", users.delete);

    // Delete all users (maybe not good idea)
    app.delete("/api/users", users.deleteAll);
};