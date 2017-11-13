module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: false
      }
    }
  }, {
    tableName: 'categories',
    timestamps: true,
    classMethods: {
      associate: function (models) {
        Category.hasMany(models.CalendarEvent);
      }
    }
  })

  sequelize.sync()

  return Category
}