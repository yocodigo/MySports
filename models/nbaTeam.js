module.exports = function(sequelize, DataTypes) {
  var nbaTeam = sequelize.define("nbaTeam", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    color1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    color2: {
      type: DataTypes.STRING,
      allowNull: true
    },
   logo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return nbaTeam;
};