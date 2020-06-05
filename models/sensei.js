// Dependencies
// =============================================================
var Sequelize = require("sequelize");

// Require the sequelize library
var sequelize = require("../config/connection.js");
// Require the connection to the database (connection.js)

<<<<<<< HEAD
    var Sensei = sequelize.define("Sensei", {
      name: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.FLOAT
      },
      long: {
        type: Sequelize.FLOAT
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
    
   
    Sensei.sync();
  //Associating Sensei with Student
    Sensei.associate = function(models) {
      Sensei.hasMany(models.Student, { through: models.SenseiStudentJoin });
      Sensei.belongsTo(models.Skill);   
    };
  
    module.exports = Sensei;
 
=======
var Sensei = sequelize.define("Sensei", {
  name: {
    type: Sequelize.STRING,
  },
  geo_coordinates: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  bio: {
    type: Sequelize.STRING,
  },
  skill_level: {
    type: Sequelize.INTEGER,
  },
  credits: {
    type: Sequelize.INTEGER,
  },
  rating: {
    type: Sequelize.INTEGER,
  },
  profile_photo: {
    type: Sequelize.STRING.BINARY,
  },
  interests: {
    type: Sequelize.STRING,
  },
  skill_id: {
    type: Sequelize.INTEGER,
  },
});

Sensei.sync();
//Associating Sensei with Student
Sensei.associate = function (models) {
  Sensei.hasMany(models.Student, { through: models.SenseiStudentJoin });
};

module.exports = Sensei;
>>>>>>> 10d05aaa0e71e77ccd1033d1dfd2d856332756f8
