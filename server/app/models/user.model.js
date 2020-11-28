const sql = require("./db.js");

// constructor
const User = function (user) {
    // this.id = user.id;
    this.email = user.email;
    this.password = user.password;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.age = user.age;
    this.gender = user.gender;
    this.gender_target = user.gender_target;
    this.profile_pic = user.profile_pic;
    this.bio = user.bio;
    // this.created_at = user.created_at;
};

User.create = async (newUser, result) => {

    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, { id: res.insertId, ...newUser });
    });
};

User.findById = (userId, result) => {
    sql.query(`SELECT * FROM user WHERE id = ${userId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            // console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found User with the id
        result({ kind: "not_found" }, null);
    });
};

User.findByIds = (userIds, result) => {
    sql.query(`SELECT * FROM user WHERE id IN (${userIds})`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log(`matching with ${res.length} users`);
            result(null, res);
            return;
        }

        // not found User with the id
        result({ kind: "not_found" }, null);
    });
};

User.findByEmail = (email, result) => {
    sql.query(`SELECT * FROM user WHERE email = "${email}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found User with that email
        console.log("found user: ", res[0]);
        result({ kind: "not_found" }, null);
    })
}

// User.findByEmail = (email) => {
//     sql.query
// };

User.getAll = (filters, result) => {
    let query = "SELECT * FROM user";


    Object.entries(filters).forEach(([key, value], idx, array) => {

        if (idx == 0) query = `${query} WHERE`;
        if (value === 'bi') {
            query = `${query} gender='female' OR gender='male'`;
        } else {
            query = (`${query} ${key}='${value}'`);
        }
        if (idx !== array.length - 1) {
            query = `${query} AND`;
        }

    })

    console.log(query); // ToRemove

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, res);
    });
};

User.updateById = (id, body, result) => {
    sql.query(
        'UPDATE user SET ? WHERE id = ?',
        [body, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.affectedRows == 0) {
                // not found User with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated user: ", { id: id, ...body });
            result(null, { id: id, ...body });
        }
    );
};

User.remove = (id, result) => {
    sql.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.affectedRows == 0) {
            // not found User with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted user with id: ", id);
        result(null, res);
    });
};

User.removeAll = result => {
    sql.query("DELETE FROM user", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log(`deleted ${res.affectedRows} user`);
        result(null, res);
    });
};


module.exports = User;