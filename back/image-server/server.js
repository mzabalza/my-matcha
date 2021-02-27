const express = require('express');
const path = require('path');
const cors = require('cors');
const token = require('./app/middleware/token');

const dotenv = require('dotenv');
// load environment variables
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5002;


const dir = path.join(__dirname, 'uploads');

app.use(cors());
app.use(token, express.static(dir));


app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
    console.log(process.env['jwtSecret']);

})
