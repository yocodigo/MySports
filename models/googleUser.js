module.exports = function(sequelize, DataTypes) {
  var GoogleUser = sequelize.define("GoogleUser", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    googleID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return GoogleUser;
};