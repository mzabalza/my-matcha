const candidate = require('../controllers/candidate.controller.js');
const token = require('../middleware/token');

module.exports = (app) => {



    // Get all candidates
    app.get('/api/candidates', token, candidate.findAll);

}