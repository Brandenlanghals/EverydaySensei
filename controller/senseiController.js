var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var sensei = require("../models/sensei");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    sensei.all(function(data) {
      var hbsObject = {
        sensei: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/sensei", function(req, res) {
    sensei.create(req.body).then(function(teachersensei) {
        console.log(teachersensei);
        res.json(teachersensei);
        });
    });   
  
    router.put("/api/sensei", function(req, res) {
        sensei.update(
        req.body,
        {
            where: {
            id: req.body.id
            }
        }).then(function(teachersensei) {
        res.json(teachersensei);
        });
    });
    
  
  router.delete("/api/sensei/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    sensei.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;