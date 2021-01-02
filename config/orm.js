const connection = require("../connection.js");

// orm function
const orm = {
    selectAll: function (table, cb) {
        const queryString = "SELECT * FROM ?? ;";
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, col, val, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, val], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (table, col, val, id, cb) {
        const queryString = "UPDATE ?? SET ? WHERE ??=?";
        connection.query(queryString, [table, col, val, id, cb], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
}

// Export the ORM
module.exports = orm;