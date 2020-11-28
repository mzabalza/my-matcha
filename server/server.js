const express = require('express');
const path = require('path');
var cors = require('cors');
// const config = require('config');
const dotenv = require('dotenv');
const token = require('./app/middleware/token');

const dir = path.join(__dirname, 'uploads');

// load environment variables
dotenv.config({ path: './config/config.env' });


const app = express();
app.use(cors());

// Allows to get the data in req.body
app.use(express.json({ extend: false }));



const PORT = process.env.PORT || 5000;

app.use(express.static(dir));


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to matcha-server." });
});

require("./app/routes/user.routes.js")(app);
require("./app/routes/auth.routes.js")(app);
require("./app/routes/image.routes.js")(app);
require("./app/routes/match.routes.js")(app);
require("./app/routes/like.routes.js")(app);
require("./app/routes/block.routes.js")(app);
require("./app/routes/candidate.routes.js")(app);



app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});

