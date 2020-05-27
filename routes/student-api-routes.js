// Requiring our models
var db = require("../models/student");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/api/student", function(req, res) {
            db.student.findAll({
                where: {
                    id: req.params.skill_id
                  },
                
        }).then(function(dbstudent) {
          res.json(dbstudent);
        });
      });
    }
    
    // // POST route for creating new information
    // app.post("/api/student", function(req, res) {
    //     db.student.create(req.body).then(function(dbstudent) {
    //         res.json(dbstudent);
    //         });
    //     });   
    // //PUT route for updating information
    // app.put("/api/student", function(req, res) {
    //     db.student.update(
    //     req.body,
    //     {
    //         where: {
    //         id: req.body.id
    //         }
    //     }).then(function(dbstudent) {
    //     res.json(dbstudent);
    //     });
    // });
   