var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var student = require("../models/student");

router.get("/", function (req, res) {
  student.all(function (data) {
    var hbsObject = {
      sensei: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// router.get("/api/student", function (req, res) {
//   student
//     .findAll({
//       where: {
//         id: req.params.skill_id,
//       },
//     })
//     .then(function (dbstudent) {
//       res.json(dbstudent);
//     });
// });

router.post("/api/student", function (req, res) {
  student.create(req.body).then(function (dbstudent) {
    console.log(dbstudent);
    res.json(dbstudent);
    console.log("student");
  });
});

// Export routes for server.js to use.
module.exports = router;
