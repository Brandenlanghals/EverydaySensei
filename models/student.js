module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
      // Giving the Student model a name of type STRING
      id: DataTypes.INT,
      name: DataTypes.STRING,
      geo_coordinates: DataTypes.STRING,
      email: DataTypes.STRING,
      bio: DataTypes.STRING,
      skill_level: DataTypes.INT,
      credits: DataTypes.INT,
      profile_photo: DataTypes.STRING.BINARY,
      interests: DataTypes.STRING,
      skill_id: DataTypes.INT
    });

 // Associating Student with Sensei
    Student.associate = function(models) {
        Student.belongsToMany(models.Sensei, { through: models.SenseiStudentJoin });    
      };
}