// Dependencies
// =============================================================
var Sequelize = require("sequelize");

// Require the sequelize library
var sequelize = require("../config/connection.js");
// Require the connection to the database (connection.js)

    var Student = sequelize.define("Student", {
      name: {
        type: Sequelize.STRING
      },
      geo_coordinates: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      skill_level: {
       type: Sequelize.INTEGER
      },
      credits: {
      type: Sequelize.INTEGER
      },
      profile_photo: {
        type: Sequelize.STRING.BINARY
      },
      interests: {
        type: Sequelize.STRING
      },
      skill_id: {
        type: Sequelize.INTEGER
      }

    });

    Student.sync();
 // Associating Student with Sensei
    Student.associate = function(models) {
        Student.belongsToMany(models.Sensei, { through: models.SenseiStudentJoin });    
      };
