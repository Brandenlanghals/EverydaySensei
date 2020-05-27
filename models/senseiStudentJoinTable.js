// Dependencies
// =============================================================
var Sequelize = require("sequelize");

// Require the sequelize library
var sequelize = require("../config/connection.js");

    var SenseiStudentJoin = sequelize.define("SenseiStudentJoin", {
      
      student_id: {
        type: Sequelize.INTEGER
      },
      sensei_id:{
        type: Sequelize.INTEGER
      },
      primaryKey: true

    });
  // Associating Sensei 
    SenseiStudentJoin.associate = function(models) {
      SenseiStudentJoin.belongsTo(models.Student); 
      SenseiStudentJoin.belongsTo(models.Sensei);
    };
  
   SenseiStudentJoin.sync();
