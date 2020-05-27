module.exports = function(sequelize, DataTypes) {
    var SenseiStudentJoin = sequelize.define("SenseiStudentJoin", {
      // Giving the Author model a name of type STRING
      // id: DataTypes.INTEGER,
      student_id: DataTypes.INTEGER,
      sensei_id: DataTypes.INTEGER,
      primaryKey: true

    });
  // Associating Sensei 
    SenseiStudentJoin.associate = function(models) {
      SenseiStudentJoin.belongsTo(models.Student); 
      SenseiStudentJoin.belongsTo(models.Sensei);
    };
  
    return SenseiStudentJoin;
  };