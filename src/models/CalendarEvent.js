module.exports = function (sequelize, DataTypes) {
  const CalendarEvent = sequelize.define('CalendarEvent', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: false
      }
    }, 
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: false
      }
    },
    category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      validate: {
        notEmpty: false
      }
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      validate: {
        notEmpty: false
      }
    }
  }, {
    tableName: 'events',
    timestamps: true,
    classMethods: {
      associate: function (models) {
        CalendarEvent.belongsTo(models.Category, {
          foreignKey: 'categoryId',
          onDelete: 'CASCADE'
        });
        CalendarEvent.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE'
        });
      }
    }
  })

  sequelize.sync()

  return CalendarEvent
}