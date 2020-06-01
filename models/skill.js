// Dependencies
// =============================================================
var Sequelize = require("sequelize");

// Require the sequelize library
var sequelize = require("../config/connection.js");
// Require the connection to the database (connection.js)

    var Skill = sequelize.define("Skill", {
      skill_id: {
        type: Sequelize.INTEGER
      }

    });

    Skill.sync();