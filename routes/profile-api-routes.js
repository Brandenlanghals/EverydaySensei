// Requiring our models
var db = require("../models/sensei");
// var studentProfile = require("../models/student");

// Routes
// =============================================================
module.exports = function(app) {
    //Get All
    app.get("api/user_profiles", function(req, res) {
        db.user_profiles.findAll({
            }).then(function(dbuser_profiles) {
                res.json(dbuser_profiles);
            });
        });

    // Create new
    app.post("/api/user_profiles", function(req, res) {
        db.user_profiles.create(req.body).then(function(dbuser_profiles) {
            res.json(dbuser_profiles);
            });
        });   
    //Update profile
    app.put("/api/user_profiles", function(req, res) {
        db.user_profiles.update(
        req.body,
        {
            where: {
            id: req.body.id
            }
        }).then(function(dbuser_profiles) {
        res.json(dbuser_profiles);
        });
    });
    };