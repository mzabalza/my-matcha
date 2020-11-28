const auth = require("../controllers/auth.controller.js");
const token = require('../middleware/token');
const validator = require('../middleware/validator');


module.exports = app => {
    // Login
    app.post("/api/login", validator([
        'email', 'password'
    ]), auth.login);

    // Check valid token
    app.get("/api/token", token, auth.token);


};