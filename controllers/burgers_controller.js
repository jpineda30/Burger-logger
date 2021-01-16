var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

  burger.selectAll(function(data){
    
    let hbsObject = {
      burgers: data
    };

    
    res.render("index",hbsObject);
  })
  
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  

  burger.updateOne(req.body.status,req.body.value,condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });


});

router.post("/api/burgers", function(req, res) {
  

  burger.insertOne(req.body.type,req.body.burger, function(result) {
      res.send("success");
      });


});

router.delete("/api/burgers/:id", function(req, res) {
  
  let condition = "id = "+ req.params.id;
  console.log("TEST .//////////////" + req.params.id);

  burger.deleteOne(condition, function(result) {
      res.send("success");
      });


});


module.exports = router;
