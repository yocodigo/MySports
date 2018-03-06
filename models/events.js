module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
      // Giving the Author model a name of type STRING
      title: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      attendees: {
        type: DataTypes.STRING,
      }
    });
    return Event;

    Event.associate = function (models) {
        Event.hasMany(models.Fan, {
          foreignKey: {
            allowNull: false
          }
        });
      };
  };
  