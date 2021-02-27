const sql = require("./db.js");

// constructor
const Image = function (image) {
    // this.id = user.id;
    this.path = image.path;
    this.user_id = image.user_id;
    // this.created_at = user.created_at;
};

Image.create = (newImage, result) => {
    sql.query("INSERT INTO image SET ?", newImage, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        // console.log("created user: ", { id: res.insertId, ...newUser });
        console.log("created Image: ", { id: res.insertId });
        result(null, { id: res.insertId, ...newImage });
    });
};

// Image.findById = (imageId, result) => {
//     sql.query(`SELECT * FROM image WHERE id = ${imageId}`, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         if (res.length) {
//             console.log("found user: ", res[0]);
//             result(null, res[0]);
//             return;
//         }

//         // not found User with the id
//         result({ kind: "not_found" }, null);
//     });
// };


Image.getAll = (filters, result) => {
    let query = "SELECT * FROM image";

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


Image.remove = (id, result) => {
    sql.query("DELETE FROM image WHERE id = ?", id, (err, res) => {
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

        console.log("deleted image with id: ", id);
        result(null, res);
    });
};

Image.removeAll = result => {
    sql.query("DELETE FROM image", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log(`deleted ${res.affectedRows} images`);
        result(null, res);
    });
};


module.exports = Image;