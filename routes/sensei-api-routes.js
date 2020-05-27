// Requiring our models
var teacher = require("../models/sensei");

// Routes
// =============================================================
module.exports = function(app) {

    //GET route for getting all Sensei Skill IDs
    //Potential DB re-naming err
    app.get("api/sensei/:id", function(req, res) {
        teacher.sensei.findAll({
            where: {
                id: req.params.skill_id,
                rating: req.params.rating
              }
        }).then(function(teachersensei) {
            res.json(teachersensei);
          });
        });

    app.get("api/sensei", function(req, res) {
        teacher.sensei.findAll({
            }).then(function(teachersensei) {
                res.json(teachersensei);
            });
        });

    // POST route for saving a new post
    app.post("/api/sensei", function(req, res) {
        teacher.sensei.create(req.body).then(function(teachersensei) {
            res.json(dbsensei);
            });
        });   
    //PUT route for updating information
    app.put("/api/sensei", function(req, res) {
        teacher.sensei.update(
        req.body,
        {
            where: {
            id: req.body.id
            }
        }).then(function(teachersensei) {
        res.json(teachersensei);
        });
    });
    };

    
    