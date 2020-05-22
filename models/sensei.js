
module.exports = function(sequelize, DataTypes) {
    var Sensei = sequelize.define("Sensei", {
      // Giving the Author model a name of type STRING
      id: DataTypes.INT,
      name: DataTypes.STRING,
      geo_coordinates: DataTypes.STRING,
      email: DataTypes.STRING,
      bio: DataTypes.STRING,
      skill_level: DataTypes.INT,
      credits: DataTypes.INT,
      rating: DataTypes.INT,
      profile_photo: DataTypes.STRING.BINARY,
      interests: DataTypes.STRING,
      skill_id: DataTypes.INT
    });
  //Associating Sensei with Student
    Sensei.associate = function(models) {
      Sensei.hasMany(models.Student, { through: models.SenseiStudentJoin });   
    };
  
    return Sensei;
  };