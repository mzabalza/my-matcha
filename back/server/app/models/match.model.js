const sql = require("./db.js");

// constructor
const Match = function (match) {
    this.id = match.id;
    this.user_id = match.user_id;
    this.target_user_id = match.target_user_id;
};

Match.create = (newMatch, result) => {
    sql.query("INSERT INTO matching SET ?", newMatch, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        // console.log("created user: ", { id: res.insertId, ...newUser });
        console.log("created Match: ", { id: res.insertId });
        result(null, { id: res.insertId, ...newMatch });
    });

};

Match.getAll = (filters, result) => {
    let query = "SELECT * FROM matching";

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

Match.remove = (id, result) => {
    sql.query("DELETE FROM matching WHERE id = ?", id, (err, res) => {
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

        console.log("deleted match with id: ", id);
        result(null, res);
    });
};


module.exports = Match;
