// import ORM
const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (result) {
            cb(result);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", col, val, function (result) {
            cb(result);
        });
    },
    update: function (col, val, id, cb) {
        orm.updateOne("burgers", col, val, id, function (result) {
            cb(result);
        });
    },
};

// Export the database functions for the controller.
module.exports = burger;