// Import MySQL connection.
var connection = require("../config/connection.js");


var orm = {

  selectAll:function(table,cb)
  {
    let query = "select * from "+table;
    connection.query(query,(err,response)=>{
      
      cb(response);

    });
  },

  updateOne:function(table,column,value,cond,cb)
  {
    

    let query = "update " +table+" SET "+column+" = " + value +" where " + cond;
    
    connection.query(query,(err,response)=>{
      if (err) {
        throw err;
      }

      cb(response);

    });
  },

  insertOne:function(table,column,value,cb)
  {
    

    let query = "insert into " +table+" ("+column+") values ('" + value +"');"; 
    
    connection.query(query,(err,response)=>{
      if (err) {
        throw err;
      }

      cb(response);

    });
  },
  
}



module.exports = orm;
