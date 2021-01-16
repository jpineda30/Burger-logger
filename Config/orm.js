// Import MySQL connection.
var connection = require("./connection.js");


var orm = {

  selectAll:function(table,cb)
  {
    let query = "select * from "+table;
    connection.query(query,(err,response)=>{
      
      cb(response);

    });
  },

  updateOne:function(table,column,value,condition,cb)
  {
    

    let query = "update " +table+" SET "+column+" = " + value +" where " + condition;
    
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
  deleteOne:function(table,condition,cb)
  {
    

    let query = "delete from "+ table +" where "+condition+";"; 
    
    connection.query(query,(err,response)=>{
      if (err) {
        throw err;
      }

      cb(response);

    });
  },
  
}



module.exports = orm;
