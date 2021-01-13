
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {

        
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, condition,cb) {
    orm.insertOne("burgers", cols, vals, condition, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals,values,condition, cb) {
    orm.updateOne("burgers", objColVals,values,condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
