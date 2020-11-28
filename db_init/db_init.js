const { createDb, dropTable } = require('./helpers/createDb');
const { createTableUser, createTableInterest, createTableBlock, createTableLiking, createTableMatching, createTableMessage, createTableImage } = require('./helpers/createTables');


// createDb('matcha');
// dropTable('user');
// createTableUser();
// createTableInterest();
// dropTable('block');
// createTableBlock();
// dropTable('liking');
createTableLiking();
// dropTable('matching');
// createTableMatching();
// // createTableMessage();
// dropTable('image');
// createTableImage();
