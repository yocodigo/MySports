module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
      // Giving the Author model a name of type STRING
      text: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      user: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    });
    return Message;

    Message.associate = function (models) {
        Message.hasMany(models.Fan, {
          foreignKey: {
            allowNull: false
          }
        });
      };
  };
  