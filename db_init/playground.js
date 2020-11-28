const fs = require('fs');
const path = require('path');

// const files = fs.readdirSync('./');
const gender = 'female';

const files = fs.readdirSync(path.join(__dirname, `../data/images_profile/${gender}_pics`));

const image = files[Math.floor(Math.random() * files.length)];

console.log(image);