// Dependencies
// =============================================================
var Sequelize = require("sequelize");

// Require the sequelize library
var sequelize = require("../config/connection.js");
// Require the connection to the database (connection.js)

    var Skill = sequelize.define("Skill", {
      name: {
        type: Sequelize.STRING
      }
    });
    
   
    Skill.sync();
  //Associating Skill with Student
    Skill.associate = function(models) {
      Skill.hasMany(models.Student);
      Skill.hasMany(models.Sensei);   
    };
  
    module.exports = Skill;
 