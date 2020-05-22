// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    //GET route for getting all Sensei Skill IDs
    //Potential DB re-naming err
    app.get("api/sensei/:id", function(req, res) {
        db.sensei.findAll({
            where: {
                id: req.params.skill_id,
                rating: req.params.rating
              }
        }).then(function(dbsensei) {
            res.json(dbsensei);
          });
        });

    app.get("api/sensei", function(req, res) {
        db.sensei.findAll({
            }).then(function(dbsensei) {
                res.json(dbsensei);
            });
        });

    // POST route for saving a new post
    app.post("/api/sensei", function(req, res) {
        db.sensei.create(req.body).then(function(dbsensei) {
            res.json(dbsensei);
            });
        });   
    //PUT route for updating information
    app.put("/api/sensei", function(req, res) {
        db.sensei.update(
        req.body,
        {
            where: {
            id: req.body.id
            }
        }).then(function(dbsensei) {
        res.json(dbsensei);
        });
    });
    };

    
    