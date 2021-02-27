const sql = require("./db.js");

// constructor
const Like = function (like) {
    this.id = like.id;
    this.user_id = like.user_id;
    this.target_user_id = like.target_user_id;
};

Like.create = (newLike, result) => {
    sql.query("INSERT INTO liking SET ?", newLike, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        // console.log("created user: ", { id: res.insertId, ...newUser });
        console.log("created Like: ", { id: res.insertId });
        result(null, { id: res.insertId, ...newLike });
    });

};

Like.getAll = (filters, result) => {
    let query = "SELECT * FROM liking";

    Object.entries(filters).forEach(([key, value], idx, array) => {
        if (idx == 0) query = `${query} WHERE`;
        query = (`${query} ${key}='${value}'`);
        if (idx !== array.length - 1) {
            query = `${query} AND`;
        }
    })
    console.log(query);

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    });

};

Like.remove = (id, result) => {
    sql.query("DELETE FROM liking WHERE id = ?", id, (err, res) => {
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

        console.log("deleted like with id: ", id);
        result(null, res);
    });
};

Like.find = (id, result) => {
    sql.query("SELECT * FROM liking WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length !== 1) {
            console.log(`${id} not_found`);
            result(null, false);
            return;
        }
        // console.log(res, true);
        result(null, true);


    });
};

Like.match = (id1, id2, result) => {
    sql.query("UPDATE liking SET matching = ? WHERE id = ?",
        [true, `${id1}_${id2}`],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return
            }
            sql.query("UPDATE liking SET matching = ? WHERE id = ?",
                [true, `${id2}_${id1}`],
                (err, res) => {
                    if (err) {
                        console.log("error: ", err);
                        return result(err, null);
                    }
                    result(null, true)
                }
            );
        }
    );
};


module.exports = Like;
