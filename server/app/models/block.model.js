const sql = require("./db.js");

// constructor
const Block = function (block) {
    this.id = block.id;
    this.user_id = block.user_id;
    this.target_user_id = block.target_user_id;
};

Block.create = (newBlock, result) => {
    sql.query("INSERT INTO block SET ?", newBlock, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        // console.log("created user: ", { id: res.insertId, ...newUser });
        console.log("created Block: ", { id: res.insertId });
        result(null, { id: res.insertId, ...newBlock });
    });

};

Block.getAll = (filters, result) => {
    let query = "SELECT * FROM block";

    Object.entries(filters).forEach(([key, value], idx, array) => {
        if (idx == 0) query = `${query} WHERE`;
        query = (`${query} ${key}='${value}'`);
        if (idx !== array.length - 1) {
            query = `${query} AND`;
        }
    })

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    });

};

Block.remove = (id, result) => {
    sql.query("DELETE FROM block WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.affectedRows == 0) {
            console.log(`${id} not_found`);
            result({ message: `${id} not_found` }, null);
            return;
        }

        console.log("deleted block with id: ", id);
        result(null, res);
    });
};


module.exports = Block;
