var express = require("express");

var router = express.Router();

// Import the model senseiStudentJoin to use its database functions.
var senseiStudentJoin = require("../models/senseiStudentJoinTable");

router.get("/", function (req, res) {
  senseiStudentJoin.all(function (data) {
    var hbsObject = {
      sensei: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Export routes for server.js to use.
module.exports = router;
