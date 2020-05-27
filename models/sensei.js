// Dependencies
// =============================================================
var Sequelize = require("sequelize");

// Require the sequelize library
var sequelize = require("../config/connection.js");
// Require the connection to the database (connection.js)

    var Sensei = sequelize.define("Sensei", {
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
      rating: {
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
      // rating: DataTypes.INTEGER,
      // profile_photo: DataTypes.STRING.BINARY,
      // interests: DataTypes.STRING,
      // skill_id: DataTypes.INTEGER,
      // primaryKey: true
   

    Sensei.sync();
  //Associating Sensei with Student
    Sensei.associate = function(models) {
      Sensei.hasMany(models.Student, { through: models.SenseiStudentJoin });   
    };
  
    module.exports = Sensei;
 