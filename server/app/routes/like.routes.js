const like = require('../controllers/like.controller.js');
const token = require('../middleware/token');

module.exports = (app) => {

    // Get all matches (filtered)
    app.get('/api/like', token, like.findAll);

    // Match a user
    app.post('/api/like/:target_user_id', token, like.like);

    // Delete a match
    app.delete('/api/like/:target_user_id', token, like.remove);

}