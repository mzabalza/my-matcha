const block = require('../controllers/block.controller.js');
const token = require('../middleware/token');

module.exports = (app) => {

    // Get all matches (filtered)
    app.get('/api/block', block.findAll);

    // block a user
    app.post('/api/block/:target_user_id', token, block.block);

    // Delete a block
    app.delete('/api/block/:target_user_id', token, block.remove);


}