const match = require('../controllers/match.controller.js');
const token = require('../middleware/token');

module.exports = (app) => {

    // Get all matches (filtered)
    app.get('/api/match', token, match.findAll);

    // // Match a user
    // app.post('/api/match/:target_user_id', token, match.match);

    // // Delete a match
    // app.delete('/api/match/:target_user_id', token, match.remove);

}