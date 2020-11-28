const sql = require("../db");



function createTableUser() {
    console.log(`Creating table user...`);

    sql.query(
        `CREATE TABLE IF NOT EXISTS user (
                id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
                email varchar(255) NOT NULL,
                password varchar(255) NOT NULL,
                firstname varchar(255) NOT NULL,
                lastname varchar(255) NOT NULL,
                age int(1) NOT NULL,
                gender varchar(15) NOT NULL,
                gender_target varchar(15) NOT NULL,
                profile_pic varchar(255),
                bio varchar(400),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`
        , (error, results, fields) => {
            if (error) throw error;
            console.log(`Table user created.`);
        })
};

function createTableImage() {
    console.log('Creating table image...');

    sql.query(
        `CREATE TABLE IF NOT EXISTS image (
            id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
            path varchar(255) NOT NULL,
            user_id varchar(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`
        , (error, results, fields) => {
            if (error) throw error;
            console.log(`Table image created.`);
        })

}

function createTableInterest() {
    console.log(`Creating table interest...`);

    sql.query(
        `CREATE TABLE IF NOT EXISTS interest (
                id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
                user_id int(11) NOT NULL,
                name varchar(255) NOT NULL,
                continname varchar(255) NOT NULL
        )`
        , (error, results, fields) => {
            if (error) throw error;
            console.log(`Table interest created.`);
        })
};

function createTableBlock() {
    console.log(`Creating table block...`);

    sql.query(
        `CREATE TABLE IF NOT EXISTS block (
                id varchar(50) NOT NULL PRIMARY KEY,
                user_id int(11) NOT NULL,
                target_user_id int(11) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`
        , (error, results, fields) => {
            if (error) throw error;
            console.log(`Table block created.`);
        })
};

function createTableLiking() {
    console.log(`Creating table liking...`);

    sql.query(
        `CREATE TABLE IF NOT EXISTS liking (
                id varchar(50) NOT NULL PRIMARY KEY,
                user_id int(11) NOT NULL,
                target_user_id int(11) NOT NULL,
                matching boolean not null default 0,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`
        , (error, results, fields) => {
            if (error) throw error;
            console.log(`Table like created.`);
        })
};

function createTableMatching() {
    console.log(`Creating table matching...`);

    sql.query(
        `CREATE TABLE IF NOT EXISTS matching (
                id varchar(50) NOT NULL PRIMARY KEY,
                user_id int(11) NOT NULL,
                target_user_id int(11) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`
        , (error, results, fields) => {
            if (error) throw error;
            console.log(`Table match created.`);
        })
};



// function createTableRejection() {
//     console.log(`Creating table match...`);

//     sql.query(
//         `CREATE TABLE IF NOT EXISTS rejection (
//                 id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
//                 user_id int(11) NOT NULL,
//                 blocked_user_id int(11) NOT NULL
//         )`
//         , (error, results, fields) => {
//             if (error) throw error;
//             console.log(`Table match created.`);
//         })
// };


function createTableMessage() {
    console.log(`Creating table message...`);

    sql.query(
        `CREATE TABLE IF NOT EXISTS message (
                id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
                user_id_one int(11) NOT NULL,
                user_id_two int(11) NOT NULL
        )`
        , (error, results, fields) => {
            if (error) throw error;
            console.log(`Table message created.`);
        })
};


module.exports = { createTableUser, createTableInterest, createTableBlock, createTableMatching, createTableLiking, createTableMessage, createTableImage };