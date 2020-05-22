module.exports = function(sequelize, DataTypes) {
    var SenseiStudentJoin = sequelize.define("SenseiStudentJoin", {
      // Giving the Author model a name of type STRING
      id: DataTypes.INT,
      student_id: DataTypes.INT,
      sensei_id: DataTypes.INT,

    });
  // Associating Sensei 
    SenseiStudentJoin.associate = function(models) {
      SenseiStudentJoin.belongsTo(models.Student); 
      SenseiStudentJoin.belongsTo(models.Sensei);
    };
  
    return SenseiStudentJoin;
  };